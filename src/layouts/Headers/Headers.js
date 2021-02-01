import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Avatar, Breadcrumb } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import MenuLists from '../../assets/js/menus';
import styles from './Headers.css';


const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/index/set/personalcenter/index">
        个人中心
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/index/set/PersonalSettings/index">
        个人设置
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/login">
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

  info = () => {
    if (this.props.UserRedux.token) {
      this.$https.get('index/getUser')
        .then(res => {
          if (res.code === 0) {
            this.props.setUserList(res.data);
            this.setState({
              userList: res.data,
            });
          }
        });
    } else {
      const userList = {
        nickname: '未登录',
        avatar: null,
      };
      this.setState({
        userList,
      });
    }
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.UserRedux.token === this.props.UserRedux.token && this.state.userList.nickname) {
      return true;
    } else {
      this.info();
    }
    return true;
  }

  render() {
    const {
      location: {
        pathname,
      },
    } = this.props;
    const {
      userList: {
        avatar,
        nickname,
      },
    } = this.state;
    const MenuSrc = MenuLists.filter(Item => Item.path === pathname);
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
            {MenuSrcPath[0].name.map((item, index) => (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>

        <div>
          <a href="https://github.com/cgq001/dingdong-admin"
             alt=""
             style={{ color: '#666666' }}
             target="_blank">
            <Icon type="github"
                  style={{ marginRight: '20px', fontSize: '22px' }}
            />
          </a>

          <Dropdown overlay={menu}>
                      <span style={{ cursor: 'pointer' }}>
                          <Avatar shape="square"
                                  size="small"
                                  icon="user"
                                  src={avatar}
                          />
                        {nickname}
                        <Icon type="down" />
                      </span>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading,
    UserRedux: state.UserRedux,
  }),
  {
    setUserList: userList => ({
      type: 'UserRedux/setUserList',
      userList,
    }),
  },
)(withRouter(Headers));
