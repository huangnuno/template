export interface IState {
  userInfo: { username: string; id: string } | null;
}

export interface IAction {
  setUserInfo(data: IState["userInfo"]): void;
}
