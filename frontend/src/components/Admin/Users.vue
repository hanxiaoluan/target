<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import {User} from '../type'
import axios from 'axios'
import {USER_LIST} from '../../../../constants/api'
import { NDataTable } from 'naive-ui'
const userData = ref<User[]>([])
const fetchUserList = async () => {
  const result = await axios.get(USER_LIST)
  userData.value = result.data
}
onMounted(() => {
  fetchUserList()
})
const columns= [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: '用户名',
    key: '用户名'
  },
  {
    title: '邮箱',
    key: '邮箱'
  }
]
</script>

<template>
  <n-data-table
    :row-key="(item) => item.id"
    :columns="columns"
    :data="userData"
  />
</template>