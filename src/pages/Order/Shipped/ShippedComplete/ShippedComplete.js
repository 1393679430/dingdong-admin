import React, { Component } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import styles from './ShippedComplete.css';

export default class ShippedComplete extends Component {

  render() {
    const {
      name,
      address,
      tel,
      express,
      expresscode,
    } = this.props;
    return (
      <div className={styles.ShippedComplete}>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
            <div className={styles.ShippedCompleteIcon}>
              <Icon type="check-circle"
                    className={styles.ShippedCompleteIconBox}
                    theme="filled" />
              <span className={styles.ShippedCompleteIconSpan}>操作成功</span>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
            <div className={styles.ShippedSubmitList}>
              <p>
                <span>收&nbsp;&nbsp;货&nbsp;&nbsp;人:</span>
                <span>{name}</span>
              </p>
              <p>
                <span>收货地址:</span>
                <span>{address}</span>
              </p>
              <p>
                <span>联系电话:</span>
                <span>{tel}</span>
              </p>
              <p>
                <span>快递公司:</span>
                <span>{express}</span>
              </p>
              <p>
                <span>快递单号:</span>
                <span>{expresscode}</span>
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}
               style={{ paddingTop: '10px', display: 'flex', justifyContent: 'center' }}>
            <Button type="primary" style={{ marginRight: '10px' }}>下一单</Button>
            <Button>查看发货记录</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
