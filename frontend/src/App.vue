<script lang="ts" setup>
import PageHeader from './components/PageHeader/Index.vue'
import GlobalMessageContent from './components/GlobalMessageContent.vue'
import {NMessageProvider} from 'naive-ui'
</script>

<template>
  <PageHeader />
  <router-view />
  <n-message-provider>
    <GlobalMessageContent />
  </n-message-provider>
</template>