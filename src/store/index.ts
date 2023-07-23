/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 17:04:53
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-23 19:51:11
 * @FilePath: /my-vite-project/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
