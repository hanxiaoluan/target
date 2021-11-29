<script lang="ts" setup>
import { NDataTable } from 'naive-ui'
import {onMounted, ref} from 'vue'
import {TargetItem} from './type'
import axios from 'axios'
import {TARGET_LIST} from '../../../constants/api'
const targetData = ref<TargetItem[]>([])
const fetchTargetList = async () => {
  const result = await axios.get(TARGET_LIST)
  targetData.value = result.data
}
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
  <n-data-table
    :row-key="(item) => item.id"
    :columns="columns"
    :data="targetData"
  />
</template>