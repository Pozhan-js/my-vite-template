/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-23 19:57:22
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-23 19:57:25
 * @FilePath: /my-vite-project/src/store/modules/auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { AuthState } from './model/authModel'
import { AuthInfo } from '../../api/user/types'
export const useAuthStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'app-auth',
  state: (): AuthState => ({
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: '',
    // 后端返回的用户角色列表
    roles: [],
    // 后端返回的按钮权限列表
    authButtonList: [],
    // 后端返回的路由列表
    authRouterList: [],
    // 处理之后侧边栏菜单列表
    authMenuList: [],
  }),

  actions: {
    // setRouteName
    setRouteName(name: string) {
      this.routeName = name
    },

    resetAuth() {
      this.authRouterList = []
    },
    // 设置用户权限信息
    setAuth(authInfo: AuthInfo) {
      this.roles = authInfo.roles
      this.authButtonList = authInfo.buttons
      this.authRouterList = authInfo.routes
    },
    setAuthMenuList(list: Menu.MenuOptions[]) {
      this.authMenuList = list
    },
  },
})
