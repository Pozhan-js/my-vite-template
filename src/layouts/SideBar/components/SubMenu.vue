<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-10 21:05:58
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 22:34:57
 * @FilePath: /my-sph-mall-admin/src/layouts/SideBar/component/SubMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu
      v-if="subItem.children && subItem.children.length > 1"
      :index="subItem.path"
    >
      <template #title>
        <el-icon>
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <span>{{ subItem.meta.title }}</span>
      </template>
      <!-- 有children递归本次组件 -->
      <sub-menu :menuList="subItem.children" />
    </el-sub-menu>
    <el-menu-item
      v-else-if="subItem.children && subItem.children.length == 1"
      :index="subItem.children[0].path"
      @click="handleClickMenu(subItem.children[0])"
    >
      <el-icon>
        <component :is="subItem.children[0].meta.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ subItem.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <el-menu-item
      v-else
      :index="subItem.path"
      @click="handleClickMenu(subItem)"
    >
      <el-icon>
        <component :is="subItem.meta.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ subItem.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { Menu } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
// import {ref} from 'vue'

defineProps({
  menuList: {
    type: Menu.MenuOptions,
    default: () => [],
  },
})

const router = useRouter()
function handleClickMenu(subItem: Menu.MenuOptions) {
  // 跳转外部链接
  // TAG 应为大屏展示是直接跳转到外部链接展示的
  if (subItem.meta.isLink) return window.open(subItem.meta.isLink, '_blank')
  // 判断只有一级的话，直接跳转子级相关信息
  const { children } = subItem
  if (children?.length === 1) {
    router.push(children[0].path)
    return
  }
  router.push(subItem.path)
}
</script>

<style lang="scss" scoped>
.SubMenu {
  color: red;
}
</style>
