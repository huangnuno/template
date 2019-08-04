<template>
  <div>
    <input type="text"
           v-model="signInForm.username"
           placeholder="用户名">
    <input type="password"
           v-model="signInForm.password"
           placeholder="密码">
    <button @click="handleSubmit('formInline')">登录</button>
  </div>
</template>
  
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class SignIn extends Vue {
  // 登录form
  public signInForm = {
    username: "",
    password: "",
  };
  // 处理登录
  public handleSubmit(name) {
    //
  }
}
</script>