<template>
  <div class="decoration__page">
    <div class="decoration__page--form">
      <el-button type="primary">新增页面</el-button>
      <el-button>批量删除</el-button>
    </div>
    <div class="decoration__page--table">
      <el-table :data="tableData">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column prop="name"
                         label="名称">
        </el-table-column>
        <el-table-column prop="status"
                         label="当前状态">
        </el-table-column>
        <el-table-column prop="updatedAt"
                         label="最后修改">
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="{row}">
            <el-button type="text"
                       size="small">编辑</el-button>
            <el-button type="text"
                       size="small">预览</el-button>
            <el-button type="text"
                       size="small">发布</el-button>
            <el-button type="text"
                       size="small">复制</el-button>
            <el-button type="text"
                       size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Page extends Vue {
  tableData = [
    {
      name: "页面一",
      status: "未发布",
      updatedAt: "2019-08-10",
    },
  ];
}
</script>
  
