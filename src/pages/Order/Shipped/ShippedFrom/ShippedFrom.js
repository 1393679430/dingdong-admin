import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';
import styles from './ShippedFrom.css';


const { Option } = Select;

class ShippedFrom extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.changeFrom(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const {
      name,
      address,
      tel,
      express,
      expresscode,
    } = this.props;
    return (
      <div className={styles.ShippedFrom}>
        <Form {...formItemLayout}
              onSubmit={this.handleSubmit}
              className="login-form">
          <Form.Item label="收货人">
            {getFieldDecorator('name', {
              initialValue: name,
              rules: [
                { required: true, message: '请输入收货人姓名' },
                { min: 2, max: 10, message: '请输2~10位字符' },
              ],
            })(
              <Input
                prefix={<Icon type="user"
                              style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入收货人"
              />,
            )}
          </Form.Item>
          <Form.Item label="收货地址">
            {getFieldDecorator('address', {
              initialValue: address,
              rules: [
                { required: true, message: '请输入收货地址' },
              ],
            })(
              <Input
                prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入收货地址"
              />,
            )}
          </Form.Item>
          <Form.Item label="联系电话">
            {getFieldDecorator('tel', {
              initialValue: tel,
              rules: [
                { required: true, message: '请输入收货人联系电话' },
                { min: 11, max: 11, message: '请输11位手机号码' },
              ],
            })(
              <Input
                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入收货人电话"
              />,
            )}
          </Form.Item>

          <Form.Item label="快递公司">
            {getFieldDecorator('express', {
              initialValue: [express],
              rules: [{ required: true, message: '请选择快递公司' }],
            })(
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="请选择快递公司"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value={1}>自营快递</Option>
              </Select>,
            )}
          </Form.Item>

          <Form.Item label="快递单号">
            {getFieldDecorator('expresscode', {
              initialValue: expresscode,
              rules: [
                { required: true, message: '请输入快递单号' },
              ],
            })(
              <Input
                prefix={<Icon type="barcode" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入快递单号"
              />,
            )}
          </Form.Item>
          <Form.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button type="primary"
                    htmlType="submit"
                    className="login-form-button">
              下一步
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(ShippedFrom);
