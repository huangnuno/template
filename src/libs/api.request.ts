import { AxiosRequestConfig, AxiosPromise } from "axios";
import HttpRequest from "@/libs/axios";
import config from "@/config";
import { IGetAPI, IPostAPI, IPutAPI, IDeleteAPI } from "@/api/interface";

class Request {
  private axios: HttpRequest;
  constructor(baseUrl = config.baseUrl[process.env.NODE_ENV]) {
    this.axios = new HttpRequest({ baseURL: baseUrl });
  }

  public async get<URL extends keyof IGetAPI = "common">(
    url: URL | string,
    params?: any,
    conf?: AxiosRequestConfig,
  ): Promise<IGetAPI[URL]> {
    return (await this.axios.request({
      url,
      method: "get",
      params,
      ...conf,
    })).data;
  }

  public async post<URL extends keyof IPostAPI = "common">(
    url: URL | string,
    data?: any,
    conf?: AxiosRequestConfig,
  ): Promise<IPostAPI[URL]> {
    return (await this.axios.request({
      url,
      method: "post",
      data,
      ...conf,
    })).data;
  }

  public async put<URL extends keyof IPutAPI = "common">(
    url: URL | string,
    data?: any,
    conf?: AxiosRequestConfig,
  ) {
    return (await this.axios.request({
      url,
      method: "put",
      data,
      ...conf,
    })).data;
  }

  public async delete<URL extends keyof IDeleteAPI = "common">(
    url: URL | string,
    data?: any,
    conf?: AxiosRequestConfig,
  ) {
    return (await this.axios.request({
      url,
      method: "delete",
      data,
      ...conf,
    })).data;
  }
}

export const api = new Request();

export default Request;
