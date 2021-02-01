import React, { Component } from 'react';
import { Row, Col, Table, Steps } from 'antd';
import styles from './ShippedDeliver.css';
import ShippedFrom from '../ShippedFrom/ShippedFrom'; // 填写发货表单
import ShippedSubmit from '../ShippedSubmit/ShippedSubmit'; // 确认提交发货表单
import ShippedComplete from '../ShippedComplete/ShippedComplete';

const { Step } = Steps;

// 订单信息
const columns = [
  {
    title: '商品编号',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '商品名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '单价',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '件数',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '金额',
    key: 'picks',
    dataIndex: 'picks',
  },
];

const data = [
  {
    key: '1',
    name: 'SP45566455',
    age: 12,
    address: '1.99',
    tags: 1,
    picks: 0.99,
  },
  {
    key: '2',
    name: 'SP45566456',
    age: 32,
    address: '5.99',
    tags: 2,
    picks: 0.99,
  },
  {
    key: '3',
    name: 'SP45566451',
    age: 2,
    address: '2.99',
    tags: 1,
    picks: 1.99,
  },
];


export default class ShippedDeliver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromSubmit: {
        name: '张三',
        address: '北京市朝阳区宣武门大街1760号',
        tel: '18165456210',
        express: 1,
        expresscode: 'KD1655446464115554',
      },
      step: 0, // 1 -> 填写快递  2 -> 确认填写信息  3 -> 完成
    };
  }

  // 修改快递信息
  changeFrom = state => {
    const stateSrc = { ...state };
    stateSrc.express = state.express[0];
    this.setState({
      fromSubmit: { ...stateSrc },
      step: 1,
    });
  };

  // 提交快递信息时返回上一步
  goBack = num => {
    this.setState({
      step: num,
    });
  };

  render() {
    const {
      step,
      fromSubmit,
    } = this.state;
    return (
      <div className={styles.ShippedDeliver}>
        {/* 发货操作 */}
        <div className={styles.ShippedDeliverOperation}>
          {/* 订单详情信息 */}
          <div className={styles.RefundDetailsBoxTitle}>订单状态</div>
          <Row>
            <Col xs={24} sm={24} md={24} lg={{ span: 6, offset: 4 }} xl={{ span: 14, offset: 5 }}>
              <Steps current={1}>
                <Step title="生成订单" />
                <Step title="待发货" />
                <Step title="待收货" />
                <Step title="完成" />
              </Steps>
            </Col>
          </Row>
        </div>
        {/* 订单详情列表 */}
        <div className={styles.ShippedDeliverList}>
          {/* 订单详情信息 */}
          <div className={styles.RefundDetailsBoxTitle}>订单详情</div>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
        </div>
        {/* 用户详情 */}
        <div className={styles.ShippedDeliverName}>
          {/* 用户信息 */}
          <div className={styles.RefundDetailsBoxTitle}>用户信息</div>
          <Row>
            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
              <div className={styles.RefundDetailsBoxDetailsList}>
                <span>用户姓名:</span>
                <span>小铃铛</span>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
              <div className={styles.RefundDetailsBoxDetailsList}>
                <span>联系电话:</span>
                <span>18100012126</span>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
              <div className={styles.RefundDetailsBoxDetailsList}>
                <span>订单编号:</span>
                <span>DD12564789654</span>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
              <div className={styles.RefundDetailsBoxDetailsList}>
                <span>收货地址:</span>
                <span>北京市朝阳区玄武门大街176号</span>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
              <div className={styles.RefundDetailsBoxDetailsList}>
                <span>备注:</span>
                <span>无</span>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
              <div className={styles.RefundDetailsBoxDetailsList}>
                <span>快递单号:</span>
                <span>无</span>
              </div>
            </Col>
          </Row>
        </div>
        {/* 发货操作 */}
        <div className={styles.ShippedDeliverOperation}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={{ span: 6, offset: 4 }} xl={{ span: 14, offset: 5 }}>
              <Steps current={step}>
                <Step title="填写快递信息" />
                <Step title="确认快递信息" />
                <Step title="完成" />
              </Steps>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={{ span: 6, offset: 4 }} xl={{ span: 14, offset: 5 }}>
              <div className={styles.ShippedDeliverOperationBox}>
                {step === 0 ? (
                  <ShippedFrom {...fromSubmit}
                               changeFrom={this.changeFrom} />
                ) : (
                  step === 1 ? <ShippedSubmit {...fromSubmit}
                                              goBack={this.goBack} /> :
                    <ShippedComplete {...fromSubmit} />
                )}
                {/* <ShippedFrom {...this.state.fromSubmit} changeFrom={this.changeFrom} />
                               <ShippedSubmit {...this.state.fromSubmit} goBack={this.goBack} />
                               <ShippedComplete {...this.state.fromSubmit} /> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
