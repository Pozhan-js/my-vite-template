/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-30 14:38:20
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 22:49:53
 * @FilePath: /my-sph-mall-admin/mock/_utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ResultEnum } from '../src/enums/httpEnums'

/**
 * @description: 错误响应结构
 * @returns {*}
 */
export function resultError(
  message = 'Request failed',
  { code = ResultEnum.ERROR, data = null } = {},
) {
  return {
    code,
    data,
    message,
    type: 'error',
  }
}

/**
 * @description: 成功响应结构
 * @returns {*}
 */
export function resultSuccess<T>(data: T, { message = 'ok' } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    data,
    message,
    type: 'success',
  }
}

export interface requestParams {
  method: string
  body: any
  headers?: { authorization?: string }
  query: any
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 * @return token
 */
export function getRequestToken({
  headers,
}: requestParams): string | undefined {
  return headers?.authorization
}
