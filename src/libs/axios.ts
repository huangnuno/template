import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class HttpRequest {
  private baseURL: string;
  private headers: any;

  constructor({ baseURL, headers = {} }: AxiosRequestConfig) {
    this.baseURL = baseURL;
    this.headers = headers;
  }

  public getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: this.headers,
    };
    return config;
  }

  public interceptors(instance: AxiosInstance) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
    // 响应拦截
    instance.interceptors.response.use(
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
  }

  public request(options: AxiosRequestConfig) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance.request(options);
  }
}

export default HttpRequest;
