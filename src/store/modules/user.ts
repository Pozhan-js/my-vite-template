/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 17:08:28
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 23:40:18
 * @FilePath: /my-vite-project/src/store/modules/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { getUserInfo, logout } from '@/api'
import type { UserState } from './model/userModel'
import type { UserInfo } from '@/api/user/types'
import { useAuthStore } from './auth'
import { RESEETSTORE } from '@/utils/reset'
export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    token: '',
    userInfo: null,
  }),
  actions: {
    // setToken
    setToken(token: string) {
      this.token = token
    },
    // setUserInfo
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    },
    async GetInfoAction() {
      const { data } = await getUserInfo()
      console.log('用户信息', data)

      const { avatar, buttons, name, roles, routes } = data
      const authStore = useAuthStore()
      // 存储用户信息
      this.setUserInfo({ avatar, name })
      // 存储用户权限信息
      authStore.setAuth({ buttons, roles, routes })
    },
    async Logout() {
      await logout()
      RESEETSTORE()
    },
  },
  // 设置为true，缓存state
  persist: true,
})
