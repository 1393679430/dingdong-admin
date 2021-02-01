import React, { Component } from 'react';
import { Row, Col, Alert, Divider, Form, Icon, Input, Button, message } from 'antd';
import styles from './ShippedSubmit.css';

class ShippedSubmit extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.codeword === '000000') {
          this.props.goBack(2);
        } else {
          message.error('发货密码错误');
        }
      }
    });
  };

  prive = num => {
    this.props.goBack(num);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div className={styles.ShippedSubmit}>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
            <Alert
              message="请确认收货人信息无误,提交后将不可更改"
              type="warning"
              showIcon
              closable
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
            <div className={styles.ShippedSubmitList}>
              <span>收&nbsp;&nbsp;货&nbsp;&nbsp;人:</span>
              <span>{this.props.name}</span>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
            <div className={styles.ShippedSubmitList}>
              <span>收货地址:</span>
              <span>{this.props.address}</span>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
            <div className={styles.ShippedSubmitList}>
              <span>联系电话:</span>
              <span>{this.props.tel}</span>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
            <div className={styles.ShippedSubmitList}>
              <span>快递公司:</span>
              <span>{this.props.express === 1 ? '自营快的' : '第三方快的'}</span>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
            <div className={styles.ShippedSubmitList}>
              <span>快递单号:</span>
              <span>{this.props.expresscode}</span>
            </div>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
              <Form.Item label="确认密码">
                {getFieldDecorator('codeword', {
                  rules: [{ required: true, message: '请输入确认密码' }, { min: 2, max: 6, message: '请输2~6位字符' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入确认密码"
                    type="password"
                  />,
                )}
              </Form.Item>
              <Form.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: '10px' }}>
                  提交
                </Button>
                <Button type="info" className="login-form-button" onClick={() => this.prive(0)}>
                  上一步
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form.create()(ShippedSubmit);
