<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { NForm, NFormItem, NInput, FormRules } from 'naive-ui'
import { TargetFormData } from '../type'
import { setAddItemFormRef, fetchTargetList } from './index'
import { TARGET_LIST } from '../../../../constants/api'
import axios from 'axios'

const formRef = ref(null)

const formData = ref<TargetFormData>({
  目标内容: '',
  用户名: '',
  计划完成时间: '',
})

const requiredValueValidator = (rule: any, value: any) => {
  const {field} = rule
  if (!value) {
    return new Error(`${field}必填`)
  }
  return true
}

onMounted(() => {
  setAddItemFormRef(formRef.value)
})

const rules: FormRules = {
  '目标内容': [
    {
      required: true,
      validator: requiredValueValidator,
      trigger: ['input', 'blur']
    }
  ],
  '用户名': [
    {
      required: true,
      validator: requiredValueValidator,
      trigger: ['input', 'blur']
    }
  ],
  '计划完成时间': [
    {
      required: true,
      validator: requiredValueValidator,
      trigger: ['input', 'blur']
    }
  ]
}

const submitFormData = async () => {
  await axios.post(TARGET_LIST, formData.value)
  await fetchTargetList()
}

</script>

<template>
  <n-form
    ref="formRef"
    :model="formData"
    :rules="rules"
    @submit="submitFormData"
  >
    <n-form-item
      path="目标内容"
      label="目标内容"
    >
      <n-input
        v-model:value="formData.目标内容"
        placeholder="请输入"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item
      path="用户名"
      label="用户名"
    >
      <n-input
        v-model:value="formData.用户名"
        placeholder="请输入"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item
      path="计划完成时间"
      label="计划完成时间"
    >
      <n-input
        v-model:value="formData.计划完成时间"
        placeholder="请输入"
        @keydown.enter.prevent
      />
    </n-form-item>
  </n-form>
</template>