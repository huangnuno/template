import { IState as userState } from "./user";

export interface IRootState {
  user: userState;
}
