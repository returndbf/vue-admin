<script setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  password:''
})

const submitForm = async (formEl) => {
  if (!formEl) return

}
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
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
    <el-form-item>
      <el-button type="primary" @click="submitForm(formLabelAlign)">
        Create
      </el-button>
      <el-button @click="resetForm(formLabelAlign)">Reset</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<style scoped>

</style>
