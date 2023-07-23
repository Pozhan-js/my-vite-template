/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 18:06:09
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-23 23:11:26
 * @FilePath: /my-vite-project/src/router/constantRoutes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { RouteRecordRaw } from 'vue-router'
import { HOME_URL, LOGIN_URL } from '@/config/config'

const LAYOUT = () => import('@/layouts/index.vue')

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: LOGIN_URL,
    name: 'login',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/error/error-404.vue'),
  },
  {
    path: '/',
    name: 'LAYOUT',
    component: LAYOUT,
    redirect: HOME_URL,
    meta: {
      title: '首页',
      icon: 'HomeFilled',
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/data-screen',
    name: 'DataScreen',
    component: () => import('@/views/data-screen/index.vue'),
    meta: {
      icon: 'DataLine',
      title: '数据大屏',
    },
  },
  // 此路由防止控制台出现No match found for location with path的警告
  {
    path: '/:catchAll(.*)',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/error/error-404.vue'), //这个是我自己的路径
  },
]
/**
 * @description 路由未找到
 */
export const notFoundRouter = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  redirect: '404',
}
