/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-23 01:09:02
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-23 01:09:24
 * @FilePath: /my-vite-project/src/utils/http/type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// * 请求响应参数(不包含data)
export interface Result {
  code: number
  message: string
  success?: boolean
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  data: T
}
