import React from 'react';
import { connect } from 'dva';

function Login(props) {
  // if(!props.UserRedux.token){
  //     return <Redirect to= '/login'></Redirect>
  // }
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {props.children}
    </div>
  );
}

export default connect(
  state => ({
    loading: state.loading, // dva已经可以获得 loading状态
    UserRedux: state.UserRedux, // 获取指定命名空间的模型状态
  }),
)(Login);
