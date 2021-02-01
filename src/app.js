/*
 * @Author: your name
 * @Date: 2019-12-02 09:09:09
 * @LastEditTime : 2020-01-05 11:25:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umi-admin\src\app.js
 */
import { Component } from 'react'
import axios from './assets/axios/Https'

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

Component.prototype.$https = axios
