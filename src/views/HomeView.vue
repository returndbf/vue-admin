<template>
  <div class="common-layout">
    <el-container>
      <el-header>
       <Header :userInfo = userInfo></Header>
      </el-header>
      <el-container>
        <SideMenu/>
        <el-main>
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {ArrowDown} from '@element-plus/icons-vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {getReward} from "@/api/request";
import SideMenu from "@/component/SideMenu.vue";
import Header from "@/component/Header.vue";
import Container from "@/component/Container.vue";
import { reactive } from "vue";
import { getUserInfoApi } from "@/api/user";

const userInfo = reactive({
  username:"aa",
  id:"",
  avatar:"",
})

const getUserInfo = () =>{
    getUserInfoApi().then(res=>{
      Object.assign(userInfo, res);
    })
}


</script>

<style scoped>
.el-container {
  height: 100vh;
}


.el-header{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  height: 50px;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}



.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-menu-vertical-demo{
  height: 100vh;
}
</style>
