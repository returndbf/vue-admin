<script setup>

import { Location } from "@element-plus/icons-vue";
</script>

<template>
<div>
  <el-aside width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
    >
      <router-link to="/login">
        <el-menu-item index="0">
          <template  #title>
            <el-icon><location /></el-icon>
            <span>首页</span>
          </template>
        </el-menu-item>
      </router-link>
      <el-sub-menu index="1">
        <template  #title>
          <el-icon><location /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="user">
          <template  #title>
            <span slot="title">用户管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="role">
          <template #title>
            <span slot="title">角色管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="menu">
          <template #title>
            <span slot="title">菜单管理</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统工具</span>
        </template>
        <el-menu-item index="2-2">
          <template #title>
            <span slot="title">数字字典</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</div>
</template>

<style scoped>
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

</style>
