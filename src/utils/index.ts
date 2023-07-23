/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-23 20:40:39
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-23 20:52:13
 * @FilePath: /my-vite-project/src/utils/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const num = 0
/**
 * @description: 设置提示信息时间提醒
 * @return {*}
 */
export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9
    ? '早上好'
    : hour <= 11
    ? '上午好'
    : hour <= 13
    ? '中午好'
    : hour < 20
    ? '下午好'
    : '晚上好'
}

/**
 * @description: 设置随机提示信息
 * @return {*}
 */
export function welcome() {
  const arr = [
    '加油努力工作',
    '喝一杯咖啡吧',
    '休息一会儿吧',
    '准备吃什么呢',
    '要不要站起来活动一下',
  ]
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}
