import React, { Component } from 'react';
import './font.css';
import { Layout } from 'antd';
import styles from './index.css';
import Titles from './Titles/Titles';
import Menus from './Menus/Menus';
import Headers from './Headers/Headers';

const { Header, Sider, Content } = Layout;

export default class BasicLayout extends Component {

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
