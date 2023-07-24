/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-24 22:06:32
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 22:06:44
 * @FilePath: /my-vite-project/src/store/modules/model/settingsModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* AuthState */
export interface SettingsState {
  collapse: boolean
  refresh: boolean
  themeConfig: ThemeConfigProps
}

export interface ThemeConfigProps {
  primary: string
  isDark: boolean
}
