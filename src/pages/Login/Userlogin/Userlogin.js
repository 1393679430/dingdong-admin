/*
 * @Author: 崔国强
 * @Date: 2019-12-02 16:06:22
 * @LastEditTime : 2020-01-05 15:56:22
 * @LastEditors  : Please set LastEditors
 * @Description: 用户名 密码 登录
 * @FilePath: \umi-admin\src\pages\Login\Userlogin\Userlogin.js
 */
import React, { Component } from 'react'
import { connect } from 'dva'

import styles from  './Userlogin.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import router from 'umi/router';

 class Userlogin extends Component {
    handleSubmit = e => {
        e.preventDefault();
        let This = this
        this.props.form.validateFields((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
              this.$https.post('nottoken/login',{
                ...values
              })
              .then(res=>{
                if(res.code === 0){
                   
                  This.props.setToken(res.data.token)
                    console.log(values.remember)
                  if(values.remember){
                    localStorage.setItem('token',res.data.token)
                  }else{
                    sessionStorage.setItem('token',res.data.token)
                  }
                  router.push('/index/');
                }
              })
          }
        });
      };
      componentDidMount(){
        // console.log(this.props)
      }
      render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
            <Form.Item>
              {getFieldDecorator('user', {
                 initialValue: this.props.userList.user,
                rules: [{ required: true, message: '请输入用户名' },{ min: 4 , max: 16, message: '请输入4~16位密码' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                initialValue: this.props.userList.password,
                rules: [{ required: true, message: '请输入密码' },{ min: 6 , max: 18, message: '请输入6~18位密码' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
                <div className='cant'>
                        {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                        })(<Checkbox>自动登录</Checkbox>)}
                        <span className={styles.loginFormForgot}>
                            忘记密码
                        </span>
                </div>
              
              <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                登&nbsp;&nbsp;&nbsp;&nbsp;录
              </Button>
            </Form.Item>
          </Form>
        );
      }
}

export default connect(
    state => ({
          loading: state.loading , //dva已经可以获得 loading状态
          UserRedux: state.UserRedux  //获取指定命名空间的模型状态
      }),
      {
          setToken: token => ({
              type: 'UserRedux/setToken', //action的type需要以命名空间为前缀+reducer名称
              token
          })
      }

)(Form.create()(Userlogin))
