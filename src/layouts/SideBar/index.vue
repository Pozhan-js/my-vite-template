<template>
  <div class="layout-sidebar-container" :class="{ 'is-collapse': collapse }">
    <logo />
    <el-scrollbar height="400px">
      <el-menu
        background-color="#001529"
        text-color="hsla(0,0%,100%,.65)"
        active-text-color="#fff"
        :defaultActive="activeMenu"
        :collapse="collapse"
        :unique-opened="true"
      >
        <sub-menu :menuList="menuList"></sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Logo from '../Logo/index.vue'
import SubMenu from './components/SubMenu.vue'
import { useSettingsStore } from '@/store/modules/settings'
import { useAuthStore } from '@/store/modules/auth'
import { useRoute } from 'vue-router'

const settingsStore = useSettingsStore()
const authStore = useAuthStore()
// 获取路由对象
const route = useRoute()

const menuList = computed(() => authStore.authMenuList)
const collapse = computed(() => settingsStore.collapse)
// 获取当前路由或者是meta中的activeMenu 设置菜单中的默认选项
const activeMenu = computed(() =>
  route.meta.activeMenu ? (route.meta.activeMenu as string) : route.path,
)
</script>

<style lang="scss" scoped>
@mixin active {
  &:hover {
    color: $base-color-white;
  }

  &.is-active {
    color: $base-color-white;
    background-color: var(--el-color-primary) !important;
  }
}

.layout-sidebar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: $base-z-index;
  width: $base-left-menu-width;
  height: 100vh;
  background: $base-menu-background;
  box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
  transition: width $base-transition-time;

  &.is-collapse {
    width: $base-left-menu-width-min;
    border-right: 0;
  }

  :deep(.el-scrollbar__wrap) {
    overflow-x: hidden;

    .el-menu {
      border: 0;
    }

    .el-menu-item,
    .el-submenu__title {
      height: $base-menu-item-height;
      overflow: hidden;
      line-height: $base-menu-item-height;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }

    .el-menu-item {
      @include active;
    }
  }
}
</style>
