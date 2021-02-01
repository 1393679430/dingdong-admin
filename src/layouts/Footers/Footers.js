/*
 * @Author: 崔国强
 * @Date: 2019-12-02 10:29:46
 * @LastEditTime: 2019-12-02 10:50:34
 * @LastEditors: Please set LastEditors
 * @Description: 公共底部
 * @FilePath: \umi-admin\src\layouts\Footers\Footers.js
 */
import React, { Component } from 'react'
import styles from './Footers.css'
import { Icon } from 'antd';

export default class  extends Component {
    render() {
        return (
            <div className={styles.footers}>
                Copyright  2019 
                <a target="_blank" rel="noopener noreferrer" href='https://www.baidu.com/'>
                    <Icon className={styles.gethub} type="github" />
                </a>
            </div>
        )
    }
}
