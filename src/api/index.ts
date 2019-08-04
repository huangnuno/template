import { api } from "@/libs/api.request";
import { ISignForm } from "./interface";

export const signIn = (data: ISignForm) => {
  return api.post("/api/sign/in", data);
};
