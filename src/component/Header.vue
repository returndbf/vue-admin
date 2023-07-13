<script setup>

import { ArrowDown } from "@element-plus/icons-vue";
const props = defineProps(['userInfo'])
</script>

<template>
 <div class="">
   <strong style="line-height: 50px">后台管理</strong>
   <div class="header-avatar">
     <el-avatar :src=userInfo.avatar></el-avatar>
     <span>
              <el-dropdown>
                <span class="el-dropdown-link">
                  {{userInfo.username}}<el-icon class="el-icon--right"><arrow-down/></el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                      <el-dropdown-item>个人中心</el-dropdown-item>
                      <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
          </span>
   </div>
 </div>
</template>

<style scoped>
.header-avatar {
  float: right;
  display: flex;
  width: 200px;
  justify-content: space-around;
  align-items: center;
  height: 50px;
}


</style>
