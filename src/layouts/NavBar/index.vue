<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-24 22:14:52
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 22:38:38
 * @FilePath: /my-vite-project/src/layouts/NavBar/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-09 23:53:38
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-11 23:41:38
 * @FilePath: /my-sph-mall-admin/src/layouts/NavBar/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav-bar-container">
    <el-row :gutter="15">
      <el-col :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <el-icon class="fold-unfold" @click="handleCollapse">
            <component :is="collapse ? 'Expand' : 'Fold'"></component>
          </el-icon>
          <Breadcrumb />
        </div>
      </el-col>
      <el-col :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <Refresh />
          <ScreenFull />
          <Settings />
          <User />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'
import User from './components/User/index.vue'
import Breadcrumb from './components/Breadcrumb/index.vue'
import Refresh from './components/Refresh/index.vue'
import ScreenFull from './components/ScreeFull/index.vue'
import Settings from './components/Settings/index.vue'

const settingsStore = useSettingsStore()

const collapse = computed(() => settingsStore.collapse)

function handleCollapse() {
  settingsStore.changeCollapse()
}
</script>

<style lang="scss" scoped>
.nav-bar-container {
  position: relative;
  height: $base-nav-bar-height;
  padding-right: $base-padding;
  padding-left: $base-padding;
  overflow: hidden;
  user-select: none;
  background: $base-color-white;
  box-shadow: $base-box-shadow;

  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 60px;

    .fold-unfold {
      font-size: 18px;
      color: $base-color-gray;
      cursor: pointer;
    }
  }

  .right-panel {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    height: $base-nav-bar-height;
  }
}
</style>
