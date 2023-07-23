/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 17:51:26
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-23 09:05:07
 * @FilePath: /my-vite-project/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { staticRoutes } from './constantRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原到顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
export default router
