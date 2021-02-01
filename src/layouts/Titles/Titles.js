import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import styles from './Titles.css';
import MenuLists from '../../assets/js/menus';

class Titles extends Component {
  render() {
    const MenuSrc = MenuLists.filter(Item => Item.path === this.props.location.pathname);
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
