import axios from 'axios';

// 创建 axios 实例
const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // 示例接口地址
  timeout: 5000, // 超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么，例如处理 401
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, logging out...');
    }
    return Promise.reject(error);
  }
);

export default request;
