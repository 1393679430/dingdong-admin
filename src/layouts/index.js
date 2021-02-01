/*
 * @Author: 崔国强
 * @Date: 2019-12-02 09:09:09
 * @LastEditTime: 2019-12-12 15:42:58
 * @LastEditors: Please set LastEditors
 * @Description: 主页 全局布局
 * @FilePath: \umi-admin\src\layouts\index.js
 */
import React, { Component } from 'react';
import './font.css';
import styles from './index.css';
import Titles from './Titles/Titles';
import Menus from './Menus/Menus';
// import Footers from './Footers/Footers'
import Headers from './Headers/Headers';
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;


export default class BasicLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.normal}>
        <Layout className={styles.Layouts}>
          <Sider className={styles.siders}>
            <Menus />
          </Sider>
          <Layout>
            <Header className={styles.Headers}>
              <Headers />
            </Header>
            <Content className={styles.Contents}>
              <Titles />
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}


