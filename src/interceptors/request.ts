import {
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const requestInterceptor: {
  request?: AxiosInterceptorManager<AxiosRequestConfig>;
  response?: AxiosInterceptorManager<AxiosResponse>;
} = {};

// 请求拦截
requestInterceptor.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 响应拦截
requestInterceptor.response.use(
  res => {
    if (res.data.code !== 200) {
      return Promise.reject(
        res.data.msg || res.data.message || "未知错误，请稍后再试",
      );
    }
    return res;
  },
  error => {
    return Promise.reject(error);
  },
);

export { requestInterceptor };
