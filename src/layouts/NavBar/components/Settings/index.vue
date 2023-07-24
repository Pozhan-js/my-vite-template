<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-11 23:40:15
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-12 00:46:42
 * @FilePath: /my-sph-mall-admin/src/layouts/NavBar/components/Settings/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="btn">
    <el-tooltip effect="dark" content="系统设置">
      <el-button circle @click="onSetting">
        <IconifyIcon icon="ep:setting" height="16" />
      </el-button>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import mittBus from '@/utils/mittBus'
const onSetting = () => {
  // 采用事件监听的方式打开ThemeDrawer
  mittBus.emit('openThemeDrawer')
}
</script>

<style scoped lang="scss">
.btn {
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
</style>
