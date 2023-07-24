/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 15:37:11
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-24 23:43:40
 * @FilePath: /my-vite-project/src/utils/http/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import type {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/modules/user'
import { ResultEnum } from '@/enums/httpEnums'
import { LOGIN_URL } from '@/config/config'
import router from '@/router'
import { RESEETSTORE } from '../reset'
import { ResultData } from './type'
// 创建 axios 实例  export interface AxiosInstance extends Axios 继承原始类
const service: AxiosInstance = axios.create({
  //
  baseURL: import.meta.env.VITE_APP_BASE_API, // url = base url + request url  baseURL 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  timeout: ResultEnum.TIMEOUT as number, // 请求超时时间
})

/**
 * @description: 请求拦截器
 * @param {*} config
 * @return {*}
 */
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 在发送请求之前获取token
    const userStore = useUserStore()
    const token = userStore.token
    if (token) {
      // 如果token存在, 则在请求头中加入token
      config.headers.token = token
    }
    return config
  },
  function (error: AxiosError) {
    ElMessage.error(error.message)
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

/**
 * @description: 响应拦截器
 * @param {*} response
 * @return {*}
 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const { data } = response

    if (data.code === ResultEnum.EXPIRE) {
      RESEETSTORE()
      ElMessage.error(data.message || ResultEnum.ERRMESSAGE)
      router.replace(LOGIN_URL)
      return Promise.reject(data)
    }

    // 当状态吗不等于200时
    if (data.code && data.code !== ResultEnum.SUCCESS) {
      ElMessage.error(data.message || ResultEnum.ERRMESSAGE)
      return Promise.reject(data)
    }

    return data
  },
  function (error: AxiosError) {
    // 超出 2xx 范围的状态码都会触发该函数。

    let message = ''
    const status = error.response?.status
    //匹配状态码
    switch (status) {
      case 401:
        message = 'token 失效，请重新登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器故障'
        break
      default:
        message = '网络连接故障'
    }

    ElMessage.error(message)
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

const http = {
  get<T>(
    url: string,
    params?: object,
    config?: AxiosRequestConfig,
  ): Promise<ResultData<T>> {
    return service.get(url, { params, ...config })
  },

  post<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<ResultData<T>> {
    return service.post(url, data, config)
  },

  put<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<ResultData<T>> {
    return service.put(url, data, config)
  },

  delete<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<ResultData<T>> {
    return service.delete(url, { data, ...config })
  },
}
export default http
