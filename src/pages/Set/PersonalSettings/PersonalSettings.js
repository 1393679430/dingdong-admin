/*
 * @Author: 崔国强
 * @Date: 2019-12-05 18:19:06
 * @LastEditTime: 2019-12-17 15:56:48
 * @LastEditors: Please set LastEditors
 * @Description: 个人设置
 * @FilePath: \umi-admin\src\pages\Set\PersonalSettings\PersonalSettings.js
 */
import React, { Component } from 'react'

import styles from './PersonalSettings.css'

import BasicSetup from './BasicSetup/BasicSetup'  //基本设置
import SecuritySetup from './SecuritySetup/SecuritySetup'  //安全设置

import { Tabs } from 'antd';

const { TabPane } = Tabs;


function callback(key) {
    console.log(key);
  }

  
export default class PersonalSettings extends Component {
    render() {
        return (
            <div className={styles.PersonalSettings}>
                <div className={styles.PersonalSettingsBox}>
                    <Tabs defaultActiveKey="1" onChange={callback} tabPosition='left' size='small' >
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
        )
    }
}
