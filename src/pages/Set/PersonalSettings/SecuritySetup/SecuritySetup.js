
import React, { Component } from 'react'
import styles from './SecuritySetup.css'

export default class SecuritySetup extends Component {
    render() {
        return (
            <div className={styles.SecuritySetup}>
                <div className={styles.SecuritySetupName}>安全设置</div>
                <div className={styles.SecuritySetupList}>
                    <div className={styles.SecuritySetupListLeft}>
                        <p>账户密码</p>
                        <p>当前密码强度: 强</p>
                    </div>
                    <div className={styles.SecuritySetupListRight}>
                        <span>修改</span>
                    </div>
                </div>
                <div className={styles.SecuritySetupList}>
                    <div className={styles.SecuritySetupListLeft}>
                        <p>操作密码</p>
                        <p>用于发货、财务支付等</p>
                    </div>
                    <div className={styles.SecuritySetupListRight}>
                        <span>修改</span>
                    </div>
                </div>
            </div>
        )
    }
}
