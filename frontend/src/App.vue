<template>
  <n-data-table
    :columns="columns"
    :data="data"
  />
</template>

<script lang="ts" setup>
import { NDataTable } from 'naive-ui'
const columns= [
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
const data = [
  {
    key: 0,
    目标内容: '完成Target项目搭建',
    计划完成时间: '2021-11-24 17:31:57',
    完成时间: '2021-11-24 17:31:57',
    用户名: '刘晨',
  },
  {
    key: 1,
    目标内容: '完成Target项目第一次功能迭代',
    计划完成时间: '2021-12-24 17:31:57',
    完成时间: '',
    用户名: '刘晨',
  },
]
</script>