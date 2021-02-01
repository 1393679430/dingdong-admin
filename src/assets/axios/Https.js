import { message, Modal } from 'antd';
import router from 'umi/router';
import axios from 'axios';
import UserRedux from '../../models/UserRedux';

const { confirm } = Modal;

function showDeleteConfirm() {
  confirm({
    title: '是否现在去登录?',
    content: '你还没有登录',
    okText: '去登陆',
    okType: 'danger',
    cancelText: '取消',
    onOk() {
      router.push('/login');
    },
    onCancel() {
      message.warning('你取消了登录');
    },
  });
}

const instance = axios.create({
  baseURL: UserRedux.state.https, // ,   //全局接口公共部分
  timeout: 3000,
});

const key = 'dingdong'; // 控制是否关闭动画
//   拦截请求
instance.interceptors.request.use(config => {
  if (UserRedux.state.token) {
    config.headers = {
      Authorization: UserRedux.state.token,
      ...config.headers,
    };
  }
  // 加载动画
  message.loading({ content: 'Loading...', key });
  UserRedux.state.isLogin = true; // 是否正在登录
  return config;
}, error => Promise.reject(error));
//  响应请求
instance.interceptors.response.use(response => {
  if (response.data.code === 0 && response.data.msg) {
    message.success({ content: response.data.msg, key, duration: 1 });
  } else if (response.data.code === 4 && response.data.msg) {
    message.error({ content: response.data.msg, key, duration: 1 });
  } else if (response.data.code === 400 && response.data.msg) {
    message.error({ content: 'Loading...', key, duration: 1 });
    // router.push('/login');
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token');
    }
    showDeleteConfirm();
  } else {
    message.success({ content: 'Loading...', key, duration: 1 });
  }

  UserRedux.state.isLogin = false;
  console.log(response, 111)
  return response.data;
}, error => {
  message.error({ content: '网络错误,请稍后重试', key, duration: 3 });
  UserRedux.state.isLogin = false;
  console.log(error, 2222)
  return Promise.reject(error);
});

export default instance;
