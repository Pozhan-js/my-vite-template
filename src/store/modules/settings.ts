/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-24 22:06:03
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 22:06:08
 * @FilePath: /my-vite-project/src/store/modules/settings.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { DEFAULT_PRIMARY } from '@/config/config'
import type { SettingsState, ThemeConfigProps } from './model/settingsModel'
export const useSettingsStore = defineStore({
  id: 'app-settings',
  state: (): SettingsState => ({
    collapse: false,
    refresh: false, // 刷新页面
    themeConfig: {
      primary: DEFAULT_PRIMARY,
      isDark: false,
    },
  }),

  actions: {
    changeCollapse() {
      this.collapse = !this.collapse
    },
    setRefresh() {
      this.refresh = !this.refresh
    },
    setThemeConfig(themeConfig: ThemeConfigProps) {
      this.themeConfig = themeConfig
    },
  },
  persist: true,
})
