/*
 * @Author: 崔国强
 * @Date: 2019-12-12 14:46:29
 * @LastEditTime : 2020-01-07 17:22:53
 * @LastEditors  : Please set LastEditors
 * @Description: 用户全局Redux配置
 * @FilePath: \umi-admin\src\models\UserRedux.js
 */

// 获取 本地存储的 token
let token = localStorage.getItem('token') || sessionStorage.getItem('token');

let global = {
  namespace: 'UserRedux',  //model的命名空间，区分多个model
  state: {
    https: 'http://dingdong-api.nodebook.top/admin/',   //普通接口   'http://192.168.188.200:5005/admin/'  /api
    httpsUpload: 'http://dingdong-api.nodebook.top/admin/index/upload',  //图片上传接口 'http://127.0.0.1:5005/admin/index/upload'  /api/index/upload
    token: token || null,      //token
    isLogin: false,  //是否正在登录
    userList: {
      name: '张三',
    },
  },
  effects: {
  },
  reducers: {
    isLogin(state, action) {
      let stateSrc = state;
      stateSrc.isLogin = true;
      return stateSrc;
    },
    removeLogin(state, action) {
      let stateSrc = state;
      stateSrc.isLogin = false;
      return stateSrc;
    },
    setToken(state, action) {
      let stateSrc = state;
      stateSrc.token = action.token;
      return stateSrc;
    },
    setUserList(state, action) {
      let stateSrc = state;
      stateSrc.userList = action.userList;
      return stateSrc;
    },
  },
};

export default global;
