<script lang="ts" setup>
import { h } from 'vue'
import { NMenu, NLayout, NLayoutSider, MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

const renderRouterLinkLabel = (option: MenuOption) => {
  const {label, key} = option
  return h(
    RouterLink,
    {
      to: {
        path: `/admin/${key}`
      }
    },
    { default: () => label }
  )
}

const menuOptions = [
  {
    label: '目标列表',
    key: 'targetList',
  },
  {
    label: '用户',
    key: 'users',
  },
]
</script>

<template>
  <n-layout
    has-sider
    position="absolute"
    style="top: 65px"
  >
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="140"
      show-trigger
    >
      <n-menu
        :render-label="renderRouterLinkLabel"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout>
      <router-view />
    </n-layout>
  </n-layout>
</template>