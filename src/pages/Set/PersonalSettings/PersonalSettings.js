import React, { Component } from 'react';
import { Tabs } from 'antd';
import styles from './PersonalSettings.css';
import BasicSetup from './BasicSetup/BasicSetup'; // 基本设置
import SecuritySetup from './SecuritySetup/SecuritySetup'; // 安全设置

const { TabPane } = Tabs;

export default class PersonalSettings extends Component {
  render() {
    return (
      <div className={styles.PersonalSettings}>
        <div className={styles.PersonalSettingsBox}>
          <Tabs defaultActiveKey="1"
                tabPosition="left"
                size="small">
            <TabPane tab="基本设置" key="1">
              <BasicSetup />
            </TabPane>
            <TabPane tab="安全设置" key="2">
              <SecuritySetup />
            </TabPane>
            <TabPane tab="快捷方式" key="3">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
