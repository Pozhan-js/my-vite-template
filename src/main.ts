/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-18 22:12:16
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 23:22:44
 * @FilePath: /my-vite-project/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'virtual:svg-icons-register'
// import './style.css'
// element默认主题
import 'element-plus/dist/index.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import registerGlobComp from '@/components'
import App from './App.vue'
import pinia from '@/store'
import router from '@/router'
import directives from '@/directives/index'

/** 加载异步路由 */
import '@/router/initDynamicRouter'
// 字体样式
import '@/assets/fonts/font.scss'
// 公共样式，包含自定义暗黑模式，element重置样式
import '@/styles/index.scss'

const app = createApp(App)

/** 导入全部Element-icon */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(registerGlobComp)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(directives)
app.mount('#app')
