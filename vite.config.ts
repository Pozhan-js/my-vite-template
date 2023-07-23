/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-18 22:12:16
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-23 08:32:13
 * @FilePath: /my-vite-project/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig((config) => {
  // command,
  const { mode, command } = config
  const env = loadEnv(mode, process.cwd())
  // console.log('env', env);

  return {
    base: './',
    plugins: [
      vue(), // * vite 可以使用 jsx/tsx 语法
      vueJsx(),
      viteMockServe({
        // 只在开发阶段开启 mock 服务
        localEnabled: command === 'serve',
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached  指定需要缓存的图标文件夹
        // process.cwd()返回脚本运行的目录的路径  此时为根路径 '/'
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format  指定symbolId格式
        symbolId: 'icon-[dir]-[name]',

        /**
         * 自定义插入位置
         * @default: body-last
         */
        // inject?: 'body-last' | 'body-first'

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        // customDomId: '__svg__icons__dom__',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    css: {
      /**
       * 在每个 SCSS 文件编译时，都会自动引入
       * "./src/styles/variable.scss" 文件。这个文件会被添加到每个 SCSS 文件的顶部。
       */
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    server: {
      host: 'localhost',
      port: Number(env.VITE_APP_PORT),
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://sph-api.atguigu.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
        },
      },
    },
  }
})
