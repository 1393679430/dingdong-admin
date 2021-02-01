import React, { Component } from 'react';
import moment from 'moment';
import { Row, Col, Button, Table, Popconfirm, Modal } from 'antd';
import styles from './KeywordIndex.css';

import KeywordAdd from './keywordAdd/KeywordAdd';

export default class KeywordIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        current: 1,
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSize: 10,
        total: 35,
      },
      visible: false,
      dataList: [],
    };
  }

  handleDelete = key => {
    this.$https.get('index/removeKeyword', {
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

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    this.$https.get('nottoken/getKeywords', {
      params: {
        current: this.state.page.current,
        pageSize: this.state.page.pageSize,
      },
    }).then(res => {
      const { page } = this.state;
      page.total = res.data.total;
      this.setState({
        page,
        dataList: res.data.list,
      });
    });
  }

  render() {
    const columns = [
      {
        title: '关键词',
        dataIndex: 'name',
        key: 'name',
        render: text => <span>{text}</span>,
      },
      {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
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
        render: (text, record) => (
          <div>
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
      visible,
    } = this.state
    return (
      <div className={styles.Carousel}>
        <div className={styles.CarouselBox}>
          <Row style={{ marginBottom: '15px' }}>
            <Col xs={24} sm={12} md={4} lg={4} xl={2} offset={1}>
              <Button type="primary" style={{ width: '100%' }} onClick={this.showModal}>
                添加关键词
              </Button>
            </Col>
          </Row>
          <Row style={{ marginBottom: '15px' }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Table rowKey='id'
                     columns={columns}
                     dataSource={dataList}
                     onChange={this.onChangePage}
                     pagination={page} />
            </Col>
          </Row>

          <Modal
            title="添加关键词"
            visible={visible}
            onCancel={this.handleCancel}
            footer={null}
            maskClosable={false}
          >
            <KeywordAdd handleCancel={this.handleCancel} />
          </Modal>
        </div>
      </div>
    );
  }
}
