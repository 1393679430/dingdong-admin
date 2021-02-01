import React, { Component } from 'react';
import Link from 'umi/link';
import { Menu, Icon } from 'antd';
import withRouter from 'umi/withRouter';
import styles from './Menus.css';
import { MENU } from './constant'

const { SubMenu } = Menu;

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: props.location.pathname,
      openKeys: [],
      rootSubmenuKeys: MENU.filter(item => item.subMenu && item.subMenu.key).map(item => item.subMenu.key),
    };
  }

  componentDidMount() {
    const {
      location,
    } = this.props;
    const keys = MENU
      .filter(item => item.menus.some(mItem => mItem.to === location.pathname))
      .map(item => item.subMenu && item.subMenu.key);
    this.handleOpenKeys(keys);
  }


  handleOpenKeys = (keys) => {
    const {
      rootSubmenuKeys,
      openKeys,
    } = this.state;
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({
        openKeys: keys,
      });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  renderMenuItem = (menus) => {
    return menus.map(mItem => (
      <Menu.Item key={mItem.key}>
        <Link to={mItem.to}>{mItem.name}</Link>
      </Menu.Item>
    ));
  };

  render() {
    const {
      location,
    } = this.props;
    const {
      openKeys,
    } = this.state;
    return (
      <div style={{ width: 200 }} className={styles.MenusBox}>
        <div className={styles.namse}>
          管理系统
        </div>
        <div className={styles.MenusBoxList}>
          <Menu
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={openKeys}
            mode="inline"
            theme="dark"
            openKeys={openKeys}
            onOpenChange={this.handleOpenKeys}
          >
            {
              MENU.map(item => {
                if (item.subMenu) {
                  return (
                    <SubMenu
                      key={item.subMenu.key}
                      title={
                        <span>
                            <Icon type={item.subMenu.title.icon} />
                            <span>{item.subMenu.title.name}</span>
                        </span>
                      }
                    >
                      {this.renderMenuItem(item.menus)}
                    </SubMenu>
                  );
                } else {
                  this.renderMenuItem(item.menus);
                }
              })
            }
          </Menu>
        </div>
      </div>
    );
  }
}


export default withRouter(Menus);
