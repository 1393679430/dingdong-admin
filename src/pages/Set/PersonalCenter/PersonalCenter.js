/*
 * @Author: 崔国强
 * @Date: 2019-12-05 17:09:14
 * @LastEditTime : 2019-12-23 11:21:04
 * @LastEditors  : Please set LastEditors
 * @Description: 个人中心
 * @FilePath: \umi-admin\src\pages\Set\PersonalCenter\PersonalCenter.js
 */
import React, { Component } from 'react'
import styles from './PersonalCenter.css'

import { connect } from 'dva';

import { Row, Col , Icon} from 'antd';


class PersonalCenter extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

        console.log(props)
    }
    render() {
        return (
            <div className={styles.PersonalCenter}>
                 <Row>
                     {/* 左侧个人信息展示 */}
                    <Col xs={24} sm={24} md={24} lg={14} xl={8} className={styles.PersonalCenterBox}>
                        {/* 头像 */}
                        <div className={styles.PersonalCenterBoxName}>
                                <div className={styles.PersonalCenterBoxNameImgs}>
                                    <img  alt='' src='https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png' />
                                </div>
                                <div className={styles.PersonalCenterBoxNameName}>小智</div>
                                <div className={styles.PersonalCenterBoxNameDescribe}>海纳百川，有容乃大</div>
                        </div>
                        {/* 身份 */}
                        <div className={styles.PersonalCenterBoxIdentity}>
                            <div className={styles.PersonalCenterBoxIdentityList}>
                                <Icon type="idcard" style={{marginRight: '10px'}}  />  <span>超级管理员</span>
                            </div>
                            <div className={styles.PersonalCenterBoxIdentityList}>
                                <Icon type="apartment" style={{marginRight: '10px'}}  /> <span>叮叮当当</span>
                            </div>
                            <div className={styles.PersonalCenterBoxIdentityList}>
                                <Icon type="environment" style={{marginRight: '10px'}}  />  <span>河南省洛阳市</span>
                            </div>
                        </div>
                        {/* 快捷方式 */}
                        <div className={styles.PersonalCenterBoxShortcut}>
                            <div className={styles.PersonalCenterBoxShortcutName}>快捷方式</div>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12} className={styles.PersonalCenterBoxShortcutNameList}>
                                    <Icon type="account-book" style={{marginRight: '10px'}} /> 快捷方式
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12} className={styles.PersonalCenterBoxShortcutNameList}>
                                    <Icon type="alert" style={{marginRight: '10px'}} />    快捷方式2
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}



// export default PersonalCenter;


export default connect(
    state => ({
        loading: state.loading , //dva已经可以获得 loading状态
        goodsList: state.UserRedux  //获取指定命名空间的模型状态
    }),
    {
        addGood: title => ({
            type: 'UserRedux/isLogin', //action的type需要以命名空间为前缀+reducer名称
            title
        }),
        getList: title => ({
            type: 'UserRedux/removeLogin' //action的type需要以命名空间为前缀+reducer名称
    
        })
    }

)(PersonalCenter)