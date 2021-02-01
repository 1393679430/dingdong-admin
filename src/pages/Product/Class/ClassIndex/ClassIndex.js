import React, { Component } from 'react';
import moment from 'moment';
import router from 'umi/router';
import Link from 'umi/link';
import { Row, Col, Input, Button, Table, Divider, Popconfirm, Switch } from 'antd';
import styles from './ClassIndex.css';

export default class ClassIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        current: 1, // 当前页
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSize: 10, // 每页条数
        total: 35, // 总条数
      },
      message: '', // 搜索关键词
      dataList: [], // 表格数组
    };
  }

  // 删除
  handleDelete = key => {
    this.$https.get('index/removeSort', {
      params: {
        id: key,
      },
    }).then(res => {
      if (res.code === 0) {
        const { dataList } = this.state;
        dataList.forEach((item, index) => {
          if (item.id === key) {
            dataList.splice(index, 1);
          }
        });
        this.setState({
          dataList,
        });
      }
    });
  };

  // 编辑
  handleEdit = key => {
    router.push({
      pathname: '/index/product/class/add',
      query: {
        id: key,
      },
    });
  };

  // 切换分页
  onChangePage = (pagination) => {
    const { page } = this.state;
    page.current = pagination.current;
    this.setState({
      page,
    });
    this.info();
  };

  // 绑定 分类输入框
  messageChange = e => {
    this.setState({
      message: e.target.value,
    });
  };

  // 生命周期
  componentDidMount() {
    this.info();
  }

  // 初始化方法
  info = () => {
    this.$https.get('nottoken/getSort', {
      params: {
        current: this.state.page.current,
        pageSize: this.state.page.pageSize,
        msg: this.state.message,
      },
    }).then(res => {
      const { page } = this.state;
      page.total = res.data.total;

      this.setState({
        page,
        dataList: res.data.list.map(item => {
          item.image = JSON.parse(item.image);
          item.shows = item.shows === 1;
          item.one_sort = Boolean(item.one_sort);
          item.key = item.id;
          return item;
        }),
      });
    });
  };

  // 查找
  searche = () => {
    const { page } = this.state;
    page.current = 1;
    this.setState({
      page,
    });
    this.info();
  };

  // 是否上线 开关
  onChangeSwitch = (check, indexs, types) => {
    const { dataList } = this.state;
    this.$https.post('index/updataSortShows', {
      shows: !check,
      id: indexs,
      types,
    }).then(() => {
      this.setState({
        dataList: dataList.map((item) => {
          if (item.id === indexs) {
            item.shows = !check;
          }
          return item;
        }),
      });
    });
  };

  render() {
    const columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <span>{text}</span>,
      },
      {
        title: '分类图片',
        dataIndex: 'image',
        key: 'image',
        render: image => (
          <div key="1">
            {image.map((item, index) => <img key={index} style={{ width: '50px' }} alt={index} src={item.url} />)}
          </div>
        ),
      },
      {
        title: '是否上架',
        dataIndex: 'shows',
        key: 'shows',
        render: (shows, record) => (
          <Switch defaultChecked={shows}
                  onClick={() => this.onChangeSwitch(shows, record.id, 1)} />
        ),
      },
      {
        title: '添加到首屏',
        dataIndex: 'one_sort',
        key: 'one_sort',
        render: (shows, record) => (
          <Switch defaultChecked={shows}
                  onClick={() => this.onChangeSwitch(shows, record.id, 2)} />
        ),
      },
      {
        title: '创建人',
        dataIndex: 'user_nickname',
        key: 'user_nickname',
      },
      {
        title: '创建时间',
        dataIndex: 'createtime',
        key: 'createtime',
        render: text => <span>{moment(text).format('YY-MM-DD HH:mm:ss')}</span>,
      },
      {
        title: '更新时间',
        dataIndex: 'updatatime',
        key: 'updatatime',
        render: text => <span>{moment(text).format('YY-MM-DD HH:mm:ss')}</span>,
      },
      {
        title: '操作',
        dataIndex: 'action',
        render: (text, record) =>
          (
            <div>
              <Button type="primary"
                      size="small"
                      onClick={() => this.handleEdit(record.key)}>编辑</Button>
              <Divider type="vertical" />
              <Popconfirm title="确认删除?"
                          okText="确认"
                          cancelText="取消"
                          onConfirm={() => this.handleDelete(record.key)}>
                <Button type="danger"
                        size="small">删除</Button>
              </Popconfirm>
            </div>
          ),
      },
    ];
    const {
      message,
      dataList,
      page,
    } = this.state;
    return (
      <div className={styles.ShopIndex}>
        <div className={styles.ShopIndexBox}>
          <Row style={{ marginBottom: '15px' }}>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <Input placeholder="请输入分类名称"
                     value={message}
                     onChange={this.messageChange} />
            </Col>
            <Col xs={24} sm={12} md={4} lg={4} xl={2} offset={1}>
              <Button type="primary"
                      style={{ width: '100%' }}
                      onClick={this.searche}>查找</Button>
            </Col>
            <Col xs={24} sm={12} md={4} lg={4} xl={2} offset={1}>
              <Button type="primary"
                      style={{ width: '100%' }}>
                <Link to="/index/product/class/add">添加</Link>
              </Button>
            </Col>
          </Row>
          <Row style={{ marginBottom: '15px' }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Table columns={columns}
                     dataSource={dataList}
                     onChange={this.onChangePage}
                     pagination={page} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
