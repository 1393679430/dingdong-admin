
import React, { Component } from 'react';
import { Icon, Tabs } from 'antd';
import styles from './Login.css';
import Userlogin from './Userlogin/Userlogin';
import UserRegistered from './UserRegistered/UserRegistered';

const { TabPane } = Tabs;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '1',
      userList: { // 用户信息
        user: '',
        password: '',
      },
    };
  }

  callback = key => {
    this.setState({
      key,
    });
  };

  setKey = key => {
    this.setState({
      key,
    });
  };

  setUser = value => {
    this.setState({
      userList: value,
    });
  };

  render() {
    return (
      <div className={styles.login}>
        <div className={styles.title}>
          <h3>管理系统</h3>
          <p>让生活更简单</p>
        </div>
        <div className={styles.loginBox}>
          <Tabs defaultActiveKey={this.state.key} activeKey={this.state.key} onChange={this.callback}>
            <TabPane tab="登录" key="1">
              <Userlogin userList={this.state.userList} />
            </TabPane>
            <TabPane tab="注册" key="2">
              <UserRegistered setKey={this.setKey} setUser={this.setUser} />
            </TabPane>
          </Tabs>
        </div>
        <div className={styles.foots}>
          Copyright 2019~2020 技术支持: React、umi、dva
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/cgq001/dingdong-admin">
            <Icon className={styles.gethub} type="github" />
          </a>
        </div>
      </div>
    );
  }
}
