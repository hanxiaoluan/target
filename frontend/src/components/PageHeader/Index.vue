<script lang="ts" setup>
import {NPageHeader, NSpace, NButton} from 'naive-ui'
</script>

<template>
  <div class="target-header">
    <n-page-header>
      <template #title>
        <a
          href="https://anyway.fm/"
          style="text-decoration: none; color: inherit;"
        > Target
        </a>
      </template>
      <template #extra>
        <n-space>
          <n-button>登录</n-button>
        </n-space>
      </template>
    </n-page-header>
  </div>
</template>

<style>
.target-header {
  padding: 15px;
  border-bottom: 1px solid rgb(239, 239, 245);
}
</style>