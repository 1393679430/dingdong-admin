/*
 * @Author: 崔国强
 * @Date: 2019-12-05 18:34:44
 * @LastEditTime : 2019-12-23 11:11:08
 * @LastEditors  : Please set LastEditors
 * @Description: 基本设置
 * @FilePath: \umi-admin\src\pages\Set\PersonalSettings\BasicSetup\BasicSetup.js
 */
import React, { Component } from 'react'
import styles from './BasicSetup.css'




import { Form, Icon, Input, Button} from 'antd';
const { TextArea } = Input;


class BasicSetup extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.BasicSetup}>
                <h2 className={styles.BasicSetupH2}>基本设置</h2>
                <div className={styles.BasicSetupCentent}>
                    <div className={styles.BasicSetupCententLeft}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item label='邮箱'>
                        {getFieldDecorator('username', {
                            rules: [{ type:'email', required: true, message: '请输入正确的邮箱' }],
                        })(
                            <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入邮箱"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item label='昵称'>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入昵称' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入昵称"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item label='个人简介'>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入个人简介' }],
                        })(
                            <TextArea 
                            prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="个人简介"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item label='职位'>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入职位' }],
                        })(
                            <Input
                            prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入职位"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item label='地址'>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入地址' }],
                        })(
                            <Input
                            placeholder="请输入地址"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                更新基本信息
                            </Button>
                        </Form.Item>
                    </Form>
                    </div>
                    <div className={styles.BasicSetupCententRight}>
                    
                    </div>
                </div>
            </div>
        )
    }
}

let Froms = Form.create()(BasicSetup)
// export default withRouter(connect(mapStateToProps)(Froms));
export default  Froms;