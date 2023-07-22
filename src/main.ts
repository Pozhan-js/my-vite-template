/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-18 22:12:16
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-22 12:00:19
 * @FilePath: /my-vite-project/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'virtual:svg-icons-register'
import registerGlobComp from '@/components'


function abst5ructer() {
  console.log('123')
}

abst5ructer()

const app = createApp(App)
app.use(registerGlobComp)
app.use(ElementPlus)
app.mount('#app')
