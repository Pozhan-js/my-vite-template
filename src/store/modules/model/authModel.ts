/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-23 19:57:48
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-23 19:58:00
 * @FilePath: /my-vite-project/src/store/modules/model/authModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* AuthState */
export interface AuthState {
  routeName: string
  roles: string[]
  authButtonList: string[]
  authMenuList: Menu.MenuOptions[]
  authRouterList: string[]
}
