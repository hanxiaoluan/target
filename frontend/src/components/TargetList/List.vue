<script lang="ts" setup>
import { NDataTable, NButton } from 'naive-ui'
import { onMounted } from 'vue'
import { targetData, fetchTargetList, handleShowAddItemPopup } from './index'
import AddItemPopup from './AddItemPopup.vue'

defineProps({
  isAdminMode: Boolean
})

onMounted(() => {
  fetchTargetList()
})

const columns = [
  {
    title: '目标内容',
    key: '目标内容',
  },
  {
    title: '计划完成时间',
    key: '计划完成时间'
  },
  {
    title: '完成时间',
    key: '完成时间'
  },
  {
    title: '用户名',
    key: '用户名'
  }
]
</script>

<template>
  <div>
    <div
      v-if="isAdminMode"
      class="top-box"
    >
      <n-button @click="handleShowAddItemPopup">
        添加
      </n-button>
      <AddItemPopup />
    </div>
    <n-data-table
      :row-key="(item) => item.id"
      :columns="columns"
      :data="targetData"
    />
  </div>
</template>

<style>
  .top-box {
    padding: 15px;
  }
</style>