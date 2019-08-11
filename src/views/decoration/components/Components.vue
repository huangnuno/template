<template>
  <div class="decoration__components">
    <el-tabs v-model="activeName">
      <el-tab-pane label="基本组件"
                   name="base">基本组件</el-tab-pane>
      <el-tab-pane label="营销组件"
                   name="theme">基本组件</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Components extends Vue {
  activeName = "base";
}
</script>
