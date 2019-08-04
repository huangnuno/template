interface IBaseResponse<T = any> {
  statusCode: number;
  systemTime: number;
  data: T;
}

export interface IGetAPI {
  common: IBaseResponse;
}

export interface IPostAPI {
  common: IBaseResponse;
}

export interface IPutAPI {
  common: IBaseResponse;
}

export interface IDeleteAPI {
  common: IBaseResponse;
}
