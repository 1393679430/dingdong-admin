import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import styles from './KeywordAdd.css';

class KeywordAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListSrc: {
        name: '',
        remark: '',
      },
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.$https.post('index/addKeyword', {
          ...values,
          id: this.state.ListSrc ? this.state.ListSrc.id : null,
        }).then(res => {
          if (res.code === 0 && res.data.type === 0) {
            this.props.form.resetFields();
            this.props.handleCancel();
          } else if (res.code === 0 && res.data.type === 1) {
            this.props.form.resetFields();
            this.props.handleCancel();
          }
        });
      }
    });
  };


  render() {
    const {
      handleCancel,
      form: {
        getFieldDecorator,
      },
    } = this.props;
    const {
      ListSrc,
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}
            className={styles.keywordAdd}>
        <Form.Item>
          {getFieldDecorator('name', {
            initialValue: ListSrc.name,
            rules: [
              { required: true, message: '请输入关键词' },
              { min: 1, max: 6, message: '请输入1~6个字符的关键词' },
            ],
          })(
            <Input
              prefix={<Icon type="file-word"
                            style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入关键词"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remark', {
            initialValue: ListSrc.remark,
            rules: [
              { required: true, message: '请输入备注信息' },
            ],
          })(
            <Input
              prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入备注信息"
            />,
          )}
        </Form.Item>
        <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button className="login-form-button"
                  style={{ marginRight: '10px' }}
                  onClick={handleCancel}>
            取消
          </Button>
          <Button type="primary"
                  htmlType="submit"
                  className="login-form-button">
            确定
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'normal_login' })(KeywordAdd);
