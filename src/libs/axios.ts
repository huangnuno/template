import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { requestInterceptor } from "@/interceptors/request";

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
    instance.interceptors.request = requestInterceptor.request;
    instance.interceptors.response = requestInterceptor.response;
  }

  public request(options: AxiosRequestConfig) {
    const instance = axios.create();
    this.interceptors(instance);
    return instance.request(Object.assign(this.getInsideConfig(), options));
  }
}

export default HttpRequest;
