/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 17:08:28
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-22 17:36:06
 * @FilePath: /my-vite-project/src/store/modules/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { UserState } from './model/userModel'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('userStore', {
  // 其他配置... 这里的this相当于store对象 this.count
  state: (): UserState => ({
    token: '',
    userInfo: null,
  }),
  // 状态异同步改变
  actions: {
    increment() {
      this.token = '123'
    },
  },
  // 相当于计算属性
  getters: {
    double: (state) => state.token + '123',
  },
})
