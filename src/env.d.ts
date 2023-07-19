/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-18 23:34:12
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-19 09:58:24
 * @FilePath: /my-vite-project/src/env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
