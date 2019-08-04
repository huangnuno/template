import { IRootState } from "../interface";
import { Module } from "vuex";
import storage from "@/libs/storage";

const modules: Module<IRootState["user"], IRootState> = {
  namespaced: true,
  state: {
    userInfo: storage.get("userInfo"),
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    /**
     * @description 设置用户数据
     * @author hlp
     * @param {*} { commit }
     * @param {*} data
     */
    setUserInfo({ commit }, data) {
      storage.set("userInfo", data);
      commit("SET_USER_INFO", data);
    },
  },
};

export default modules;
