<script setup>
import { reactive, ref } from 'vue'
import { useStore } from "vuex";
import router from "@/router";
import { getReward } from "@/api/request";
const store = useStore()
const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  password:'',
  code:''
})

const submitForm = async (formEl) => {
  // if (!formEl) return
  // console.log(formLabelAlign.password)
  // getReward().then(res=>{
  //   console.log(res);
  // })
  //  await store.commit("setToken", "token")
   await router.push("/home")
}
const resetForm = (formEl) => {
  store.commit("addCount")
}
</script>

<template>
<div class>
  <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
    <el-form-item label="Name">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-input v-model="formLabelAlign.password" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-input v-model="formLabelAlign.code" />
      <el-image src=""></el-image>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formLabelAlign)">
        Create
      </el-button>
      <el-button @click="resetForm(formLabelAlign)">{{$store.state.count}}</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<style scoped>

</style>
