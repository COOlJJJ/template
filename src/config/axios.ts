import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:52319/api/PQA',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json'}
});

const axiosPlugin = {
  install: (app: any) => {
    app.config.globalProperties.$axios = instance;
    app.provide('$axios', instance)
  }
};

export default axiosPlugin;  
