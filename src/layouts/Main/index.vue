<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-23 23:19:37
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 23:01:59
 * @FilePath: /my-vite-project/src/layouts/Main/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section class="app-mian-height">
    <router-view v-slot="{ Component, route }" v-if="isShow">
      <transition appear name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()
const isShow = ref(true)
watch(
  () => settingsStore.refresh,
  () => {
    isShow.value = false
    nextTick(() => {
      isShow.value = true
    })
  },
)
</script>

<style lang="scss" scoped>
.app-mian-height {
  min-height: $base-app-main-height;

  // padding: 20px;
  background-color: inherit;
}
</style>
