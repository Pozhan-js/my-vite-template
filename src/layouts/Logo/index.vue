<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-09 19:31:42
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 22:30:28
 * @FilePath: /my-sph-mall-admin/src/layout/Logo/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="logo-container flex-center">
    <a href="/">
      <img class="logo" alt="logo" src="/logo.png" />
      <h1 class="title" v-if="!collapse">雨溪后台管理</h1>
    </a>
  </div>
</template>

<script lang="ts" setup>
// 项目首先实现登录页
// 1.登录页
import { computed } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()
//判断是否折叠
const collapse = computed(() => settingsStore.collapse)
</script>

<style lang="scss" scoped>
.logo-container {
  position: relative;
  display: flex;
  justify-content: center;

  // padding-left: 24px;
  height: 60px;
  overflow: hidden;
  line-height: 60px;
  background: transparent;

  .title {
    display: inline-block;
    margin-left: 12px;
    font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    vertical-align: middle;
  }

  .logo {
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }
}
</style>
