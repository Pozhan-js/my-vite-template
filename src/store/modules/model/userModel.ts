/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 17:13:09
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-22 17:37:13
 * @FilePath: /my-vite-project/src/store/modules/model/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// TAG: 1. 定义用户信息接口返回值类型 需删除接口
/* 用户信息接口返回值类型 */
export interface UserInfo {
  userId?: string
  name: string
  avatar: string
}

export interface UserState {
  token: string
  userInfo: Nullable<UserInfo>
}
