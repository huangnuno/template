<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="自定义页面"
                 name="page">
      <Page />
    </el-tab-pane>
    <el-tab-pane label="用户中心"
                 name="user">用户中心</el-tab-pane>
    <el-tab-pane label="底部导航"
                 name="role">底部导航</el-tab-pane>
    <el-tab-pane label="主题风格"
                 name="theme">主题风格</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Page from "./modules/Page.vue";

@Component({
  components: {
    Page,
  },
})
export default class DecorationIndex extends Vue {
  get activeName() {
    return this.$route.query.tab || "page";
  }

  set activeName(tab) {
    this.$router.replace({ name: this.$route.name, query: { tab } });
  }
}
</script>
  
<style lang="scss">
@import "../../assets/styles/decoration";
</style>
