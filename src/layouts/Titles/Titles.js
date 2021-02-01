/*
 * @Author: 崔国强
 * @Date: 2019-12-02 09:49:38
 * @LastEditTime: 2019-12-13 09:02:37
 * @LastEditors: Please set LastEditors
 * @Description: 面包屑
 * @FilePath: \umi-admin\src\layouts\Public\Titles.js
 */
import React, { Component } from 'react';

import withRouter from 'umi/withRouter';
import styles from './Titles.css';

import MenuLists from '../../assets/js/menus';

class Titles extends Component {
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
      <div className={styles.Titles}>
        <div className={styles.TitlesName}>{MenuSrcPath[0].name[MenuSrcPath[0].name.length - 1]}</div>
      </div>
    );
  }
}

export default withRouter(Titles);
