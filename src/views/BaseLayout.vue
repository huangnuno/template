<template>
  <el-container class="admin">
    <el-header class="admin__header">
      <div class="admin__center admin__center--flex">
        <img class="admin__header--logo"
             src="../assets/images/logo.png" />
        <div class="admin__header--user">
          <i class="el-icon-bell"></i>
          <img class="user--avatar"
               src="http://thirdwx.qlogo.cn/mmopen/vi_32/qh1wmJHk0LMSnj3cVT7QlRbNJNoyianTia7LcQYTniclDHuTer7cqXEicg3Wg8BXRLPR5BzRKSM8ibvct3PBrnciakrA/132" />
          <div class="user--name">用户名</div>
          <el-dropdown trigger="click">
            <i class="el-icon-arrow-down"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container class="admin__content admin__center">
      <el-aside class="admin__aside"
                width="180px">
        <div class="admin__aside--shop">
          <img src="http://wx.qlogo.cn/mmopen/G6laqcPSNfxKehdSKdQVnp7rlo33KEQqmjM3SMFCYvAMLYNCjAQjs5kjn1M0VbsicOlcDAL5PH5kTbzubREQVOfZufGjFy0DW/0"
               class="shop--logo">
          <el-dropdown placement="bottom">
            <div class="shop--name">笔歌拼团<i class="el-icon-arrow-down"></i></div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>笔歌拼团</el-dropdown-item>
              <el-dropdown-item>笔歌拼团2</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-menu default-active="/"
                 :router="true">
          <template v-for="(item,i) of routeNav">
            <template v-if="item.children">
              <el-submenu :key="i"
                          :index="i.toString()">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.meta.title}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item v-for="(sItem) of item.children"
                                :key="sItem.path"
                                :index="sItem.name"
                                :route="sItem">{{sItem.meta.title}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :route="item"
                            :key="i"
                            :index="item.path">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.meta.title}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="admin__main">
        <div class="admin__main--breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item of breadcrumb"
                                :key="item">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="admin__main--content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { routeNav } from "@/routes";

@Component
export default class BaseLayout extends Vue {
  routeNav = routeNav;

  get breadcrumb() {
    return this.$route.matched
      .map(item => {
        return item.meta && item.meta.title;
      })
      .filter(item => item);
  }

  created() {
    console.log(this.$route.path);
  }
}
</script>
  
<style lang="scss">
@import "../assets/styles/base-layout.scss";
</style>
