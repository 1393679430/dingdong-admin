
import React, { Component } from 'react'
import { Row, Col, Icon, Menu } from 'antd';
import styles from './DataIndex.css'

import Visit from './Visit/Visit' // 总销售额 分布
import Hots from './Hots/Hots' // 热门搜索图标
import Sale from './Sale/Sale' // 销售类目占比
import Client from './Client/Client'
  // 销售分类
export default class DataIndex extends Component {
    render() {
        return (
            <div className={styles.DataIndex}>
               {/* 模块化数据分析 */}
               <Row className={styles.DataIndexModule}>
                        <Col xs={24} sm={24} md={12} lg={8} xl={6} style={{ padding: '15px', boxSizing: 'border-box' }}>
                            <div className={styles.DataIndexModuleList}>
                                <div className={styles.DataIndexModuleListName}>销售总额</div>
                                <div className={styles.DataIndexModuleListNumber}>759564</div>
                                <div className={styles.DataIndexModuleListChart}>
                                    <div className={styles.DataIndexModuleListChartText}>
                                        周同比 12% <Icon type="caret-up" style={{ marginRight: '5px', color: '#F71A1A' }} />
                                        &nbsp;&nbsp;
                                        日同比 12% <Icon type="caret-down" style={{ color: '#1A96F7' }} />
                                    </div>
                                </div>
                                <div className={styles.DataIndexModuleListFoot}>
                                    日销售额 ￥12,423
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={6} style={{ padding: '15px', boxSizing: 'border-box' }}>
                            <div className={styles.DataIndexModuleList}>
                                <div className={styles.DataIndexModuleListName}>总访问量</div>
                                <div className={styles.DataIndexModuleListNumber}>101256</div>
                                <div className={styles.DataIndexModuleListChart}>
                                    <div className={styles.DataIndexModuleListChartText}>
                                        周同比 12% <Icon type="caret-up" style={{ marginRight: '10px', color: '#F71A1A' }} />
                                        &nbsp;&nbsp;
                                        日同比 12% <Icon type="caret-down" style={{ color: '#1A96F7' }} />
                                    </div>
                                </div>
                                <div className={styles.DataIndexModuleListFoot}>
                                    日访问量: 10210
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={6} style={{ padding: '15px', boxSizing: 'border-box' }}>
                            <div className={styles.DataIndexModuleList}>
                                <div className={styles.DataIndexModuleListName}>支付笔数</div>
                                <div className={styles.DataIndexModuleListNumber}>1256</div>
                                <div className={styles.DataIndexModuleListChart}>
                                    <div className={styles.DataIndexModuleListChartText}>
                                        周同比 15% <Icon type="caret-up" style={{ marginRight: '10px', color: '#F71A1A' }} />
                                        &nbsp;&nbsp;
                                        日同比 12% <Icon type="caret-down" style={{ color: '#1A96F7' }} />
                                    </div>
                                </div>
                                <div className={styles.DataIndexModuleListFoot}>
                                    日支付笔数: 210
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={6} style={{ padding: '15px', boxSizing: 'border-box' }}>
                            <div className={styles.DataIndexModuleList}>
                                <div className={styles.DataIndexModuleListName}>活跃用户</div>
                                <div className={styles.DataIndexModuleListNumber}>12506</div>
                                <div className={styles.DataIndexModuleListChart}>
                                    <div className={styles.DataIndexModuleListChartText}>
                                        周同比 15% <Icon type="caret-up" style={{ marginRight: '10px', color: '#F71A1A' }} />
                                        &nbsp;&nbsp;
                                        日同比 12% <Icon type="caret-down" style={{ color: '#1A96F7' }} />
                                    </div>
                                </div>
                                <div className={styles.DataIndexModuleListFoot}>
                                    日活跃用户: 2010
                                </div>
                            </div>
                        </Col>
               </Row>
               {/* 图表化 访问量 和 销售额 */}
               <div className={styles.DataIndexBlock}>
                   {/* 顶部 */}
                    <div className={styles.DataIndexBlockTitle}>
                        <Menu mode="horizontal">
                            <Menu.Item key="mail">
                                    销售额
                            </Menu.Item>
                            <Menu.Item key="app">
                                    访问量
                            </Menu.Item>
                        </Menu>
                    </div>
                    {/* 内容区域 */}
                    <div className={styles.DataIndexBlockChar}>
                        <Visit />
                    </div>
               </div>
               {/* 关键词 和 销售类目占比 */}
               <Row className={styles.DataIndexKeyCode}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12} style={{ paddingRight: '10px', marginTop: '20px' }}>
                            <div className={styles.DataIndexKeyCodeBox}>
                                <div className={styles.DataIndexKeyCodeName}>用户增长数量</div>
                            </div>
                            {/* 图标 */}
                            <div className={styles.DataIndexKeyCodeChart}>
                                <Hots />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12} style={{ paddingLeft: '10px', marginTop: '20px' }}>
                            <div className={styles.DataIndexKeyCodeBox}>
                                <div className={styles.DataIndexKeyCodeName}>销售类目占比</div>
                                {/* 图标 */}
                                <div className={styles.DataIndexKeyCodeChart}>
                                    <Sale />
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12} style={{ paddingRight: '10px', marginTop: '20px' }}>
                            <div className={styles.DataIndexKeyCodeBox}>
                                <div className={styles.DataIndexKeyCodeName}>客户端占比</div>
                                {/* 图标 */}
                                <div className={styles.DataIndexKeyCodeChart}>
                                    <Client />
                                </div>
                            </div>
                        </Col>
                </Row>

            </div>
        )
    }
}
