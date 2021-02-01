
import React, { Component } from 'react';
import Link from 'umi/link';
import { Menu, Icon } from 'antd';
import withRouter from 'umi/withRouter';
import styles from './Menus.css';

const { SubMenu } = Menu;


class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: props.location.pathname,
    };
  }

  render() {
    return (
      <div style={{ width: 200 }} className={styles.MenusBox}>
        <div className={styles.namse}>
          管理系统
        </div>
        <div className={styles.MenusBoxList}>
          <Menu
            defaultSelectedKeys={[this.props.location.pathname]}
            defaultOpenKeys={[this.props.location.pathname]}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="/index/" to="/index/">
              <Link to="/index/">
                <Icon type="home" />
                <span>首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/index/data/index">
              <Link to="/index/data/index">
                <Icon type="heat-map" />
                <span>数据分析</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                    <Icon type="appstore" />
                    <span>产品管理</span>
                </span>
              }
            >
              <Menu.Item key="/index/product/shoping/index">
                <Link to="/index/product/shoping/index">
                  商品管理
                </Link>
              </Menu.Item>
              <Menu.Item key="/index/product/class/index">
                <Link to="/index/product/class/index">
                  分类管理
                </Link>
              </Menu.Item>
              <Menu.Item key="/index/product/comment/index">
                <Link to="/index/product/comment/index">
                  评论管理
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                    <Icon type="layout" />
                    <span>布局控制</span>
                </span>
              }
            >
              <Menu.Item key="21">
                <Link to="/index/control/carousel/index">
                  首页轮播
                </Link>
              </Menu.Item>
              <Menu.Item key="24">
                <Link to="/index/control/keyword/index">
                  搜索发现关键词
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                    <Icon type="tags" />
                    <span>营销管控</span>
                </span>
              }
            >
              <Menu.Item key="31">
                <Link to="/index/marketing/buy/index">
                  首页疯狂抢购
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                    <Icon type="solution" />
                    <span>订单管理</span>
                </span>
              }
            >
              <Menu.Item key="41">订单列表</Menu.Item>
              <Menu.Item key="/index/order/shipped/index">
                <Link to="/index/order/shipped/index">
                  待发货
                </Link>
              </Menu.Item>
              <Menu.Item key="/index/order/refund/index">
                <Link to="/index/order/refund/index">
                  待退款
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={
                <span>
                    <Icon type="shake" />
                    <span>卡券管理</span>
                </span>
              }
            >
              <Menu.Item key="50">优惠券</Menu.Item>
              <Menu.Item key="51">限时券</Menu.Item>
              <Menu.Item key="52">新人券</Menu.Item>
              <Menu.Item key="53">兑换码</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub6"
              title={
                <span>
                    <Icon type="bars" />
                    <span>绿卡活动</span>
                </span>
              }
            >
              <Menu.Item key="60">绿卡设置</Menu.Item>
              <Menu.Item key="61">绿卡日券</Menu.Item>
              <Menu.Item key="62">绿卡周券</Menu.Item>
              <Menu.Item key="63">绿卡折扣券</Menu.Item>
              <Menu.Item key="64">绿卡新人券</Menu.Item>
              <Menu.Item key="65">绿卡专享产品</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub9"
              title={
                <span>
                    <Icon type="usergroup-delete" />
                    <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="90">用户列表</Menu.Item>
              <Menu.Item key="91">意见反馈</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub7"
              title={
                <span>
                    <Icon type="setting" />
                    <span>设置</span>
                </span>
              }
            >
              <Menu.Item key="/index/set/personalcenter/index">
                <Link to="/index/set/personalcenter/index">
                  个人中心
                </Link>
              </Menu.Item>
              <Menu.Item key="71">
                <Link to="/index/set/PersonalSettings/index">
                  个人设置
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub8"
              title={
                <span>
                    <Icon type="desktop" />
                    <span>控制台</span>
                </span>
              }
            >
              <Menu.Item key="80">系统设置</Menu.Item>
              <Menu.Item key="81">系统管理员</Menu.Item>
              <Menu.Item key="82">关于我们</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}


export default withRouter(Menus);
