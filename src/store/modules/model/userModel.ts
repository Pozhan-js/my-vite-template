/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 17:13:09
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 23:34:48
 * @FilePath: /my-vite-project/src/store/modules/model/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// TAG: 1. 定义用户信息接口返回值类型 需删除接口
/**
 * @description: Login interface parameters
 */

import type { UserInfo } from '@/api/user/types'
export interface LoginParams {
  username: string
  password: string
}

export interface UserState {
  userInfo: Nullable<UserInfo>
  token?: string
}
