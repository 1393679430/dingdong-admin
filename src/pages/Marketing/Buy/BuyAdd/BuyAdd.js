import React, { Component } from 'react';
import { Row, Col, Input, Button, Table, Tag, Select } from 'antd';
import styles from './BuyAdd.css';

const { Option } = Select;

export default class BuyAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        // current: 1,
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSize: 10,
        total: 35,
      },
    };
  }

  render() {
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <span>{text}</span>,
      },
      {
        title: '图片',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '价格',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '分类',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: '操作',
        dataIndex: 'action',
        render: () => (
          <div>
            <Button type="primary" size="small">添加</Button>
          </div>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        name: '菠菜',
        age: 32,
        address: '神操作',
        tags: ['nice', 'd45'],
      },
      {
        key: '2',
        name: '青菜',
        age: 42,
        address: '晓得了',
        tags: ['蔬菜'],
      },
      {
        key: '3',
        name: '小白菜',
        age: 32,
        address: '还挺小',
        tags: ['cool', 'teacher'],
      },
    ];
    return (
      <div className={styles.ShopIndex}>
        <div className={styles.ShopIndexBox}>
          <Row style={{ marginBottom: '15px' }}>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <Input placeholder="请输入商品名称" />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4} offset={1}>
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="请选择商品分类"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="tom">全部</Option>
                <Option value="jack">蔬菜</Option>
                <Option value="lucy">生鲜</Option>
              </Select>
            </Col>
            <Col xs={24} sm={12} md={4} lg={4} xl={2} offset={1}>
              <Button type="primary" style={{ width: '100%' }}>查找</Button>
            </Col>
          </Row>
          <Row style={{ marginBottom: '15px' }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Table columns={columns}
                     dataSource={data}
                     onChange={this.onChangePage}
                     pagination={this.state.page} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
