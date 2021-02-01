import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './HomeIndex.css';

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeName: '早上好',
    };
  }

  componentDidMount() {
    this.setTimes(this);
  }

  setTimes = This => {
    const data = new Date();
    const hours = data.getHours();
    let timeName = '早上好';
    if (hours <= 5) {
      timeName = '凌晨好';
    } else if (hours > 5 && hours <= 11) {
      timeName = '上午好';
    } else if (hours > 11 && hours <= 13) {
      timeName = '中午好';
    } else if (hours > 13 && hours <= 18) {
      timeName = '下午好';
    } else {
      timeName = '晚上好';
    }
    This.setState({
      timeName,
    });
  };

  render() {
    const {
      timeName,
    } = this.state
    const {
      UserRedux: {
        userList,
      },
    } = this.props
    return (
      <div className={styles.HomeIndex}>
        {/* 个人信息 */}
        <div className={styles.HomeIndexName}>
          {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
          <h2 className={styles.HomeIndexTitles}>
            工作台--
          </h2>
          <div className={styles.HomeIndexNameContent}>
            <div className={styles.HomeIndexNameContentLeft}>
              <div className={styles.HomeIndexNameContentLeftImg}>
                <img title="头像" alt=""
                     src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
              </div>
              <div className={styles.HomeIndexNameContentLeftName}>
                <div className={styles.HomeIndexNameContentLeftNameTop}>
                  {timeName},{userList.nickname}祝你一天工作开心!
                </div>
                <div
                  className={styles.HomeIndexNameContentLeftNameBottom}>{userList.position}</div>
              </div>
            </div>
            <div className={styles.HomeIndexNameContentRight}>
              <div className={styles.HomeIndexNameContentRightList}>
                <p>天气</p>
                <p>晴转多云</p>
              </div>
              <div className={styles.HomeIndexNameContentRightList}>
                <p>气温</p>
                <p>2~16°</p>
              </div>
              <div className={styles.HomeIndexNameContentRightList}>
                <p>风力</p>
                <p>2~4级微风</p>
              </div>
            </div>
          </div>
        </div>
        {/* 快捷操作和动态 */}
        <Row>
          {/* 快捷操作 */}
          <Col xs={24} sm={24} md={24} lg={24} xl={15}>
            <div className={styles.HomeIndexQuick}>
              <div className={styles.HomeIndexQuickBox}>
                {/* 标题 */}
                <div className={styles.HomeIndexQuickBoxTitle}>
                  快捷操作
                </div>
                {/* 快捷图标 */}
                <div className={styles.HomeIndexQuickBoxContent}>
                  <Row>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                      <div className={styles.HomeIndexQuickBoxContentList}>
                        <div className={styles.HomeIndexQuickBoxContentListTop}>
                          <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />
                          <span>控制台</span>
                        </div>
                        <div className={styles.HomeIndexQuickBoxContentListBottom}>
                          快速敏捷。中国近代史资料丛刊《太平天囯·行军总要》：“若遇有紧急事件……必动作真快捷，又勇猛。”
                        </div>
                        <div className={styles.HomeIndexQuickBoxContentListTime}>
                          2019-12-10 12:12:50
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                      <div className={styles.HomeIndexQuickBoxContentList}>
                        <div className={styles.HomeIndexQuickBoxContentListTop}>
                          <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />
                          <span>控制台</span>
                        </div>
                        <div className={styles.HomeIndexQuickBoxContentListBottom}>
                          快速敏捷。中国近代史资料丛刊《太平天囯·行军总要》：“若遇有紧急事件……必动作真快捷，又勇猛。”
                        </div>
                        <div className={styles.HomeIndexQuickBoxContentListTime}>
                          2019-12-10 12:12:50
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                      <div className={styles.HomeIndexQuickBoxContentList}>
                        <div className={styles.HomeIndexQuickBoxContentListTop}>
                          <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />
                          <span>控制台</span>
                        </div>
                        <div className={styles.HomeIndexQuickBoxContentListBottom}>
                          快速敏捷。中国近代史资料丛刊《太平天囯·行军总要》：“若遇有紧急事件……必动作真快捷，又勇猛。”
                        </div>
                        <div className={styles.HomeIndexQuickBoxContentListTime}>
                          2019-12-10 12:12:50
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                      <div className={styles.HomeIndexQuickBoxContentList}>
                        <div className={styles.HomeIndexQuickBoxContentListTop}>
                          <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />
                          <span>控制台</span>
                        </div>
                        <div className={styles.HomeIndexQuickBoxContentListBottom}>
                          快速敏捷。中国近代史资料丛刊《太平天囯·行军总要》：“若遇有紧急事件……必动作真快捷，又勇猛。”
                        </div>
                        <div className={styles.HomeIndexQuickBoxContentListTime}>
                          2019-12-10 12:12:50
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                      <div className={styles.HomeIndexQuickBoxContentList}>
                        <div className={styles.HomeIndexQuickBoxContentListTop}>
                          <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />
                          <span>控制台</span>
                        </div>
                        <div className={styles.HomeIndexQuickBoxContentListBottom}>
                          快速敏捷。中国近代史资料丛刊《太平天囯·行军总要》：“若遇有紧急事件……必动作真快捷，又勇猛。”
                        </div>
                        <div className={styles.HomeIndexQuickBoxContentListTime}>
                          2019-12-10 12:12:50
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
          {/* 动态 */}
          <Col xs={24} sm={24} md={24} lg={24} xl={9} style={{ padding: '20px', boxSizing: 'border-box' }}>
            <div className={styles.HomeIndexDynamic}>
              <div className={styles.HomeIndexDynamicTitle}>
                动态
              </div>
              <div className={styles.HomeIndexDynamicCentent}>
                <div className={styles.HomeIndexDynamicCententSwipe}>
                  <div className={styles.HomeIndexDynamicCententList}>
                    <div className={styles.HomeIndexDynamicCententListLeft}>
                      <img alt=""
                           src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    </div>
                    <div className={styles.HomeIndexDynamicCententListRight}>
                      <p className={styles.HomeIndexDynamicCententListRightPs}>
                        <span style={{ color: '#34BF5A' }}>绿卡会员</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>曲丽丽</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        在 &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#34BF5A' }}>微信小程序</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>新建订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>1个小时前</p>
                    </div>
                  </div>
                  <div className={styles.HomeIndexDynamicCententList}>
                    <div className={styles.HomeIndexDynamicCententListLeft}>
                      <img alt=""
                           src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    </div>
                    <div className={styles.HomeIndexDynamicCententListRight}>
                      <p className={styles.HomeIndexDynamicCententListRightPs}>
                        <span style={{ color: '#34BF5A' }}>绿卡会员</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>曲丽丽</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        在 &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#34BF5A' }}>微信小程序</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>新建订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>2个小时前</p>
                    </div>
                  </div>
                  <div className={styles.HomeIndexDynamicCententList}>
                    <div className={styles.HomeIndexDynamicCententListLeft}>
                      <img alt=""
                           src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    </div>
                    <div className={styles.HomeIndexDynamicCententListRight}>
                      <p className={styles.HomeIndexDynamicCententListRightPs}>
                        <span style={{ color: '#34BF5A' }}>绿卡会员</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>曲丽丽</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        在 &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#34BF5A' }}>微信小程序</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>新建订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>3个小时前</p>
                    </div>
                  </div>
                  <div className={styles.HomeIndexDynamicCententList}>
                    <div className={styles.HomeIndexDynamicCententListLeft}>
                      <img alt=""
                           src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    </div>
                    <div className={styles.HomeIndexDynamicCententListRight}>
                      <p className={styles.HomeIndexDynamicCententListRightPs}>
                        <span style={{ color: '#34BF5A' }}>绿卡会员</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>曲丽丽</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        在 &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#34BF5A' }}>微信小程序</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>新建订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>4个小时前</p>
                    </div>
                  </div>
                  <div className={styles.HomeIndexDynamicCententList}>
                    <div className={styles.HomeIndexDynamicCententListLeft}>
                      <img alt=""
                           src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    </div>
                    <div className={styles.HomeIndexDynamicCententListRight}>
                      <p className={styles.HomeIndexDynamicCententListRightPs}>
                        <span style={{ color: '#34BF5A' }}>绿卡会员</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>曲丽丽</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        在 &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#34BF5A' }}>微信小程序</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>新建订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>5个小时前</p>
                    </div>
                  </div>
                  <div className={styles.HomeIndexDynamicCententList}>
                    <div className={styles.HomeIndexDynamicCententListLeft}>
                      <img alt=""
                           src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    </div>
                    <div className={styles.HomeIndexDynamicCententListRight}>
                      <p className={styles.HomeIndexDynamicCententListRightPs}>
                        <span style={{ color: '#34BF5A' }}>绿卡会员</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>曲丽丽</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        在 &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#34BF5A' }}>微信小程序</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>新建订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>6个小时前</p>
                    </div>
                  </div>
                  <div className={styles.HomeIndexDynamicCententList}>
                    <div className={styles.HomeIndexDynamicCententListLeft}>
                      <img alt=""
                           src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    </div>
                    <div className={styles.HomeIndexDynamicCententListRight}>
                      <p className={styles.HomeIndexDynamicCententListRightPs}>
                        <span style={{ color: '#34BF5A' }}>绿卡会员</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>曲丽丽</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        在 &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#34BF5A' }}>微信小程序</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>新建订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>7个小时前</p>
                    </div>
                  </div>
                  <div className={styles.HomeIndexDynamicCententList}>
                    <div className={styles.HomeIndexDynamicCententListLeft}>
                      <img alt=""
                           src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    </div>
                    <div className={styles.HomeIndexDynamicCententListRight}>
                      <p className={styles.HomeIndexDynamicCententListRightPs}>
                        <span style={{ color: '#34BF5A' }}>绿卡会员</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>曲丽丽</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        在 &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#34BF5A' }}>微信小程序</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>新建订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>8个小时前</p>
                    </div>
                  </div>
                  <div className={styles.HomeIndexDynamicCententList}>
                    <div className={styles.HomeIndexDynamicCententListLeft}>
                      <img alt=""
                           src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    </div>
                    <div className={styles.HomeIndexDynamicCententListRight}>
                      <p className={styles.HomeIndexDynamicCententListRightPs}>
                        <span style={{ color: '#34BF5A' }}>绿卡会员</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>曲丽丽</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        在 &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#34BF5A' }}>微信小程序</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>新建订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>9个小时前</p>
                    </div>
                  </div>
                  <div className={styles.HomeIndexDynamicCententList}>
                    <div className={styles.HomeIndexDynamicCententListLeft}>
                      <img alt=""
                           src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    </div>
                    <div className={styles.HomeIndexDynamicCententListRight}>
                      <p className={styles.HomeIndexDynamicCententListRightPs}>
                        <span style={{ color: '#34BF5A' }}>绿卡会员</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>曲丽丽</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        在 &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#34BF5A' }}>微信小程序</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>新建订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>10个小时前</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading, // dva已经可以获得 loading状态
    UserRedux: state.UserRedux, // 获取指定命名空间的模型状态
  }),
  {},
)(HomeIndex);
