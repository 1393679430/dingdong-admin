/*
 * @Author: 崔国强
 * @Date: 2019-12-11 17:10:20
 * @LastEditTime : 2020-01-07 16:27:54
 * @LastEditors  : Please set LastEditors
 * @Description: 导航守卫
 * @FilePath: \umi-admin\routes\login.js
 */
import React from 'react'
// import Redirect from 'umi/redirect';
import { connect } from 'dva'

// export default props => {
//     if(Math.random > 0.5){
//         return <Redirect to= '/login'></Redirect>
//     }
//     return (
//         <div style={{width: '100%',height: '100%'}}>
//             {props.children}
//         </div>
//     )
// }



function Login(props) {
    
            // if(!props.UserRedux.token){
            //     return <Redirect to= '/login'></Redirect>
            // }
            return (
                <div style={{width: '100%',height: '100%'}}>
                    {props.children}
                </div>
            )
}

export default connect(
        state => ({
                loading: state.loading , //dva已经可以获得 loading状态
                UserRedux: state.UserRedux  //获取指定命名空间的模型状态
            })

)(Login)