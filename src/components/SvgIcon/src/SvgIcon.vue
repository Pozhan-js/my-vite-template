<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 10:53:18
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-22 11:29:13
 * @FilePath: /my-vite-project/src/components/SvgIcon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEv

-->
<template>
  <svg
   aria-hidden="true"
   :class="['svg-icon', spin && 'svg-icon-spin']"
   :style="getStyle"
 >
   <use :xlink:href="symbolId" :fill="color" />
 </svg>

</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

const props = defineProps({
 prefix: {
   type: String,
   default: 'icon',
 },
 name: {
   type: String,
   required: true,
 },
 color: {
   type: String,
   default: '',
 },
 size: {
   type: [Number, String],
   default: 20,
 },
 spin: {
   type: Boolean,
   default: false,
 },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

// CSSProperties 定义的是一个css属性对象
/**
* @description: 将传进来的size变成width和height 并且设置单位px
* @param {*} computed
* @return {*}
*/
const getStyle = computed((): CSSProperties => {
 const { size } = props
 let s = `${size}`
 s = `${s.replace('px', '')}px`
 return {
   width: s,
   height: s,
 }
})


</script>

<style  scoped>
.svg-icon {
 display: inline-block;
 overflow: hidden;
 vertical-align: -0.15em;
 fill: currentColor;
}
.svg-icon-spin {
 animation: loadingCircle 1s infinite linear;
}

/* 旋转动画 */
@keyframes loadingCircle {
 0% {
   transform: rotate(0);
 }
 100% {
   transform: rotate(360deg);
 }
}

</style>