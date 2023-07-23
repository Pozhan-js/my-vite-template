<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 18:09:32
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-23 20:47:38
 * @FilePath: /my-vite-project/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container">
    <!-- 信息提示 -->
    <el-alert
      v-show="false"
      title="尚品汇商城管理平台"
      type="success"
      :closable="false"
      style="position: fixed"
    ></el-alert>
    <el-row>
      <!-- 将登陆页面分为两半 左边为空白站位 -->
      <!-- 规定各个响应式 频宽 -->
      <el-col :xs="24" :sm="24" :md="12" :lg="14" :xl="14">
        <div style="color: transparent">左侧区域占位符</div>
      </el-col>
      <!-- 右边是登录信息窗口 -->
      <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          class="login-form"
        >
          <div class="form-header">
            <div class="title">hello !</div>
            <div class="title-tips">欢迎来到尚品汇！</div>
          </div>

          <el-form-item prop="username">
            <el-input
              v-model="ruleForm.username"
              :prefix-icon="User"
              autocomplete="off"
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              show-password
              :prefix-icon="Lock"
              autocomplete="off"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              class="login-btn"
              type="primary"
              size="large"
              :loading="loading"
              @click="submitForm(ruleFormRef)"
            >
              登陆
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import type { FormInstance } from 'element-plus'
import { ElNotification } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { HOME_URL } from '@/config/config'
import { timeFix } from '@/utils/index'
import { login } from '@/api'
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const ruleForm = reactive({
  username: 'admin',
  password: 'atguigu123',
})

const loading = ref(false)

// 自定义指令 账户名
const validateUsername = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('用户名不能为空'))
  } else if (value.length < 4) {
    callback(new Error('用户名长度不能小于4位'))
  } else {
    callback()
  }
}
// 自定义指令 密码
const validatePassword = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else if (value.length < 6) {
    callback(new Error('密码长度不能小于6位'))
  } else {
    callback()
  }
}
const rules = reactive({
  username: [{ required: true, validator: validateUsername }],
  password: [{ required: true, validator: validatePassword }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (!valid) return
    try {
      loading.value = true
      const { data } = await login(ruleForm)
      userStore.setToken(data)
      router.replace((route.query.redirect as string) || HOME_URL)
      ElNotification({
        title: `hi,${timeFix()}!`,
        message: `欢迎回来`,
        type: 'success',
      })
    } finally {
      loading.value = false
    }
  })
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
