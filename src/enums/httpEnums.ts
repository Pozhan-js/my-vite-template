/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 17:41:40
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-22 17:41:52
 * @FilePath: /my-vite-project/src/enums/httpEnums.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 响应结果
 * @argument SUCCESS  请求成功
 * @argument EXPIRE   token请求失效或校验失败
 * @argument ERROR    请求错误
 * @argument TIMEOUT  请求超时
 * @argument TYPE     请求类型
 */
export enum ResultEnum {
  SUCCESS = 200,
  EXPIRE = 203,
  ERROR = -1,
  ERRMESSAGE = '请求失败',
  TIMEOUT = 25000,
  TYPE = 'success',
}
