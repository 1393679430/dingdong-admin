import React, { Component } from 'react';
import router from 'umi/router';
import moment from 'moment';
import Link from 'umi/link';
import { Row, Col, Button, Table, Divider, Popconfirm } from 'antd';
import styles from './CarouselIndex.css';

export default class CarouselIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        current: 1,
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSize: 10,
        total: 0,
      },
      dataList: [],
    };
  }

  handleDelete = key => {
    this.$https.get('index/removeSwiper', {
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

  onChangePage = (pagination) => {
    const { page } = this.state;
    page.current = pagination.current;
    this.setState({
      page,
    });
    this.info();
  };

  componentDidMount() {
    this.info();
  }

  info = () => {
    this.$https.get('nottoken/getSwipers', {
      params: {
        current: this.state.page.current,
        pageSize: this.state.page.pageSize,
      },
    }).then(res => {
      const { page } = this.state;
      page.total = res.data.total;
      this.setState({
        page,
        dataList: res.data.list.map(item => {
          item.carousel = JSON.parse(item.carousel);
          item.shows = item.shows === 1;
          item.key = item.id;
          return item;
        }),
      });
    });
  };

  // 编辑
  handleEdit = key => {
    router.push({
      pathname: '/index/control/carousel/add',
      query: {
        id: key,
      },
    });
  };

  render() {
    const columns = [
      {
        title: '备注名称',
        dataIndex: 'remark',
        key: 'remark',
        render: text => <span>{text}</span>,
      },
      {
        title: '轮播图',
        dataIndex: 'carousel',
        key: 'carousel',
        render: image => (
          <div key="1">
            {image.map((item, index) => (
              <img key={index}
                   style={{ width: '50px' }}
                   alt={index}
                   src={item.url} />
            ))}
          </div>
        ),
      },
      {
        title: '类型',
        dataIndex: 'types',
        key: 'types',
        render: text => <span>{text === 1 ? '跳转商品' : '跳转外部链接'}</span>,
      },
      {
        title: '创建人',
        dataIndex: 'user_nickname',
        key: 'user_nickname',
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
        render: text => <span>{moment(text).format('YY-MM-DD HH:mm:ss')}</span>,
      },
      {
        title: '更新时间',
        dataIndex: 'updata_time',
        key: 'updata_time',
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
      dataList,
      page,
    } = this.state;
    return (
      <div className={styles.Carousel}>
        <div className={styles.CarouselBox}>
          <Row style={{ marginBottom: '15px' }}>
            <Col xs={24} sm={12} md={4} lg={4} xl={2} offset={1}>
              <Button type="primary" style={{ width: '100%' }}>
                <Link to="/index/control/carousel/add">添加</Link>
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
