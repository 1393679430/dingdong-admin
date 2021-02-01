import { Component } from 'react'
import axios from './assets/axios/Https'

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
    },
  },
};

Component.prototype.$https = axios
