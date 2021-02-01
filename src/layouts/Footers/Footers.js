
import React, { Component } from 'react'
import { Icon } from 'antd';
import styles from './Footers.css'

export default class extends Component {
    render() {
        return (
            <div className={styles.footers}>
                Copyright  2019
                <a target="_blank" rel="noopener noreferrer" href="https://www.baidu.com/">
                    <Icon className={styles.gethub} type="github" />
                </a>
            </div>
        )
    }
}
