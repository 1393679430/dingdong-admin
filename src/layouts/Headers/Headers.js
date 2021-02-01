/*
 * @Author: 崔国强
 * @Date: 2019-12-02 10:55:54
 * @LastEditTime : 2020-01-08 08:59:53
 * @LastEditors  : Please set LastEditors
 * @Description: 公共头部
 * @FilePath: \umi-admin\src\layouts\Headers\Headers.js
 */
import React, { Component } from 'react';
import styles from './Headers.css';
import { Menu, Dropdown, Icon, Avatar, Breadcrumb } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import MenuLists from '../../assets/js/menus';
import { connect } from 'dva';


const menu = (
  <Menu>
    <Menu.Item>
      <Link to='/index/set/personalcenter/index'>
        个人中心
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/index/set/PersonalSettings/index'>
        个人设置
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        &nbsp;&nbsp;关&nbsp;&nbsp;&nbsp;&nbsp;于&nbsp;&nbsp;
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to='/login'>
        退出登录
      </Link>
    </Menu.Item>
  </Menu>
);

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: {},
    };
  }

  info = (This) => {
    if (This.props.UserRedux.token) {
      This.$https.get('index/getUser')
        .then(res => {
          if (res.code === 0) {
            This.props.setUserList(res.data);
            This.setState({
              userList: res.data,
            });
          }
        });
    } else {
      let userList = {
        nickname: '未登录',
        avatar: null,
      };
      This.setState({
        userList,
      });
    }

  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.UserRedux.token === this.props.UserRedux.token && this.state.userList.nickname) {
      // return false

    } else {
      this.info(this);
      // return true
    }
    return true;
  }

  render() {
    let MenuSrc = MenuLists.filter(Item => {
      return Item.path === this.props.location.pathname;
    });
    let MenuSrcPath = [];
    if (MenuSrc.length > 0) {
      MenuSrcPath = MenuSrc;
    } else {
      MenuSrcPath = [{
        name: ['404'],
        path: '/404',
      }];
    }
    return (
      <div className={styles.headers}>
        <div className={styles.headersBreadcrumb}>
          <Breadcrumb className={styles.headersBreadcrumb}>
            {MenuSrcPath[0].name.map((item, index) => {
              return (
                <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </div>

        <div>
          <a href='https://github.com/cgq001/dingdong-admin' alt="" style={{ color: '#666666' }} target='_blank'>
            <Icon type="github" style={{ marginRight: '20px', fontSize: '22px' }} />
          </a>

          <Dropdown overlay={menu}>
                      <span style={{ cursor: 'pointer' }}>
                          <Avatar shape="square" size="small" icon="user"
                                  src={this.state.userList.avatar} /> {this.state.userList.nickname} <Icon
                        type="down" />
                      </span>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading, //dva已经可以获得 loading状态
    UserRedux: state.UserRedux,  //获取指定命名空间的模型状态
  }),
  {
    setUserList: userList => ({
      type: 'UserRedux/setUserList', //action的type需要以命名空间为前缀+reducer名称
      userList,
    }),
  },
)(withRouter(Headers));
