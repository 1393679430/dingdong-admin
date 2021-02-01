
import React, { Component } from 'react'
import { Row, Col, Modal, Divider, Table, Icon, Steps, Button } from 'antd';
import styles from './RefundDetails.css'

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

  // 进度信息
  const speeds = [
    {
      title: '时间',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '当前进度',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '状态',
      dataIndex: 'address',
      key: 'address',
      render: () => (
              <div>
                  <Icon type="check-circle" style={{ color: '#2BB2F8', marginRight: '5px' }} theme="filled" />
                  <span>成功</span>
              </div>
          ),
    },
    {
      title: '操作员ID',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
        title: '备注',
        key: 'tags',
        dataIndex: 'tags',
      },
  ];

  const speedsData = [
    {
      key: '1',
      name: '2019-12-12 14:26:52',
      age: '发起申请',
      address: '1.99',
      tags: 1,
    },
    {
        key: '2',
        name: '2019-12-12 16:26:52',
        age: '初步同意',
        address: '5.99',
        tags: 2,
    },
    {
        key: '3',
        name: '2019-12-13 14:26:52',
        age: '确认收单',
        address: '2.99',
        tags: 1,
    },
    {
        key: '4',
        name: '2019-12-13 14:26:52',
        age: '财务出单',
        address: '2.99',
        tags: 1,
    },
    {
        key: '5',
        name: '2019-12-13 14:26:52',
        age: '完成',
        address: '2.99',
        tags: 1,
    },
  ];

export default class RefundDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false, // 图片预览弹出层是否显示
            cancelSrc: '',
        }
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        })
    }

    showCancel = src => {
        console.log(src)
        this.setState({
            visible: true,
            cancelSrc: src,
        })
    }

    render() {
        return (
            <div className={styles.RefundDetails}>
                {/* 基本流程 */}
                <div className={styles.RefundDetailsTechnological}>
                    <div className={styles.RefundDetailsTechnologicalName}>
                        流程进度
                    </div>
                    <Steps size="small" current={0}>
                        <Step title="发起申请" subTitle="00:00:08" description="操作员: 12545" />
                        <Step title="初步同意" subTitle="00:00:08" description="操作员: 12545" />
                        <Step title="确认收单" subTitle="00:00:08" description="操作员: 12545" />
                        <Step title="财务审核" subTitle="00:00:08" description="操作员: 12545"/>
                        <Step title="完成"/>
                    </Steps>
                    <div className={styles.RefundDetailsTechnologicalStep}>
                        <Button type="primary" style={{ marginRight: '10px' }}>确认,并前往下一步</Button>
                        <Button type="danger">拒绝</Button>
                    </div>
                </div>
                {/* 退款详情 */}
                <div className={styles.RefundDetailsBox}>
                    {/* 退款申请内容 */}
                    <div className={styles.RefundDetailsBoxTitle}>退款申请</div>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <div className={styles.RefundDetailsBoxDetailsList}>
                                    <span>订单状态:</span>
                                    <span>待收货</span>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <div className={styles.RefundDetailsBoxDetailsList}>
                                    <span>申请状态:</span>
                                    <span>待确认</span>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <div className={styles.RefundDetailsBoxDetailsList}>
                                    <span>申请类型:</span>
                                    <span>仅退款</span>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <div className={styles.RefundDetailsBoxDetailsList}>
                                    <span>退款金额:</span>
                                    <span>0.5元</span>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={styles.RefundDetailsBoxDetailsMsg}>
                                <div className={styles.RefundDetailsBoxDetailsMsgName}>退款理由</div>
                                <div className={styles.RefundDetailsBoxDetailsMsgText}>退款理由</div>
                                <div className={styles.RefundDetailsBoxDetailsMsgImg}>
                                    <img alt="" onClick={() => { this.showCancel('http://qmcsdcr.oss-cn-beijing.aliyuncs.com/2019121309bd04982e124914a9e644e475467eeb.jpg') }} src="http://qmcsdcr.oss-cn-beijing.aliyuncs.com/2019121309bd04982e124914a9e644e475467eeb.jpg" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Divider />
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
                                    <span>13838828388</span>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                            <div className={styles.RefundDetailsBoxDetailsList}>
                                    <span>订单编号:</span>
                                    <span>DD13838828388</span>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                            <div className={styles.RefundDetailsBoxDetailsList}>
                                    <span>快递单号:</span>
                                    <span>KD1564897899</span>
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
                    </Row>
                    <Divider />
                    {/* 退货商品信息 */}
                    <div className={styles.RefundDetailsBoxTitle}>退货商品</div>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Table columns={columns} dataSource={data} />
                        </Col>
                    </Row>
                    <Divider />
                    {/* 退货进度 */}
                    <div className={styles.RefundDetailsBoxTitle}>退货进度</div>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Table columns={speeds} dataSource={speedsData} />
                        </Col>
                    </Row>
                </div>
                {/* 预览图片 */}
                <Modal
                    title="图片预览"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    width="70%"
                    >
                    <img min-width="100%" alt="" src={this.state.cancelSrc} />
                </Modal>
            </div>
        )
    }
}
