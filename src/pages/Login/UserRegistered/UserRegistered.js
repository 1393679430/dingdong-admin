/*
 * @Author: 崔国强
 * @Date: 2019-12-02 16:06:22
 * @LastEditTime : 2020-01-05 12:32:32
 * @LastEditors  : Please set LastEditors
 * @Description: 用户名 密码 注册
 * @FilePath: \umi-admin\src\pages\Login\UserRegistered\UserRegistered.js
 */
import React, { Component } from 'react'
import styles from  './UserRegistered.css'
import { Form, Icon, Input, Button } from 'antd';

 class UserRegistered extends Component {
    handleSubmit = e => {
        let This = this
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.$https.post('nottoken/registered',{
                ...values
            })
            .then(res => {
                if(res.code === 0){
                    this.props.form.resetFields();  //清楚 注册信息
                    This.props.setUser(values)  //提取 注册成功的数据 传递 给 登录页
                    This.props.setKey('1')  // 跳转 登录页
                }
            })
          }
        });
      };
      compareToFirstPassword = (rule, value, callback) => {  //验证两次密码是否一致
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('两次密码不一致!');
        } else {
          callback();
        }
      };
    
      validateToNextPassword = (rule, value, callback) => {  //当 密码发生改变时  确认密码也要验证
        const { form } = this.props;
        if (value) {
          form.validateFields(['passwordtwo'], { force: true });
        }
        callback();
      };

      validateToNextPasswordrule = (rule, value, callback) => {  //验证密码 是否是  数字 字母 下划线
          if(value){
            let rg =  /^[a-zA-Z0-9_-]{6,18}$/
               
                if(rg.test(value)){
                    callback();
                }else{
                    callback('请输入6~18位 数字、字母、下划线');
                }
          }else{
            callback();
          }
      }
      validateToNextUserrule = (rule, value, callback) => {  //验证用户名 是否是  数字 字母 下划线
        if(value){
          let rg =  /^[a-zA-Z0-9_-]{4,16}$/
             
              if(rg.test(value)){
                  callback();
              }else{
                  callback('请输入4~16位 数字、字母、下划线');
              }
        }else{
          callback();
        }
    }
    validateToNextNicknamerule = (rule, value, callback) => {  //验证昵称 是否是汉字
        if(value){
          let rg =  /^(?:[\u4e00-\u9fa5·]{2,6})$/
             
              if(rg.test(value)){
                  callback();
              }else{
                  callback('请输入2~6位汉字');
              }
        }else{
          callback();
        }
    }

      render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
            <Form.Item hasFeedback>
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: '请输入昵称' },{ min: 2 , max: 6, message: '请输入2~6位字符' },{validator: this.validateToNextNicknamerule,}],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入昵称"
                />,
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator('user', {
                rules: [{ required: true, message: '请输入用户名' },{ min: 4 , max: 16, message: '请输入4~16位用户名' },{validator: this.validateToNextUserrule,}],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入用户名"
                />,
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' },{ min: 6 , max: 18, message: '请输入6~18位密码' },{validator: this.validateToNextPasswordrule,},{validator: this.validateToNextPassword,}],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入密码"
                />,
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator('passwordtwo', {
                rules: [{ required: true, message: '请输入确认密码' },{ min: 6 , max: 18, message: '请输入6~18位确认密码' },{validator: this.compareToFirstPassword,}],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入确认密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.loginFormButton} style={{width: '100%'}}>
                注&nbsp;&nbsp;&nbsp;&nbsp;册
              </Button>
            </Form.Item>
          </Form>
        );
      }
}

export default Form.create()(UserRegistered)