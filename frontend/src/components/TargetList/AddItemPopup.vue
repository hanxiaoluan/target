<script lang="ts" setup>
import { NModal, FormValidationError } from 'naive-ui'
import { isAddItemPopupShow, addItemFormRef } from './index'
import AddItemForm from './AddItemForm.vue'

const validFormData = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    addItemFormRef.value.validate((errors: FormValidationError) => {
      if (!errors) {
        resolve(true)
      } else {
        reject()
      }
    })
  })
}

const handleSubmit = async () => {
  await validFormData()
  await addItemFormRef.value.onSubmit()
}


</script>

<template>
  <n-modal
    v-model:show="isAddItemPopupShow"
    :mask-closable="false"
    :show-icon="false"
    preset="dialog"
    title="添加目标"
    positive-text="确认"
    negative-text="算了"
    @positive-click="handleSubmit"
  >
    <AddItemForm />
  </n-modal>
</template>