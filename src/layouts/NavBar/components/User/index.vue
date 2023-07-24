<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-11 23:40:15
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-12 01:06:20
 * @FilePath: /my-sph-mall-admin/src/layouts/NavBar/components/User/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dropdown @visible-change="onChange" @command="handleCommand">
    <div class="avatar-dropdown">
      <img class="user-avatar" :src="avatar" alt="" />
      <div class="user-name">{{ name }}</div>
      <el-icon class="up-down">
        <component :is="visible ? 'ArrowUp' : 'ArrowDown'" />
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="logout">
          <svg-icon name="logout" size="16px" />
          <span>退出登陆</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
// TAG: 为什么这里不用按需引入
// import { ArrowUp, ArrowDown } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { LOGIN_URL } from '@/config/config'
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const { name, avatar } = userStore.userInfo || {}
const visible = ref(false)

function onChange(show: boolean) {
  visible.value = show
}

function handleCommand(command: string) {
  if (command === 'logout') {
    logout()
  }
}

// 退出登陆
function logout() {
  ElMessageBox.confirm('您确定要退出吗？', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    await userStore.Logout()
    router.push({ path: LOGIN_URL, query: { redirect: route.fullPath } })
    ElMessage.success('退出登录成功！')
  })
}
</script>

<style scoped lang="scss">
.avatar-dropdown {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 50px;
  padding: 0;

  .user-avatar {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
  }

  .user-name {
    position: relative;
    margin: 0 6px;
    cursor: pointer;
  }
}
</style>
