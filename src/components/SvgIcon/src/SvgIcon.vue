<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-22 10:53:18
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-23 22:03:45
 * @FilePath: /my-vite-project/src/components/SvgIcon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEv

-->
<template>
  <i :class="['el-icon', spin && 'svg-icon-spin']" :style="getStyle">
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" :fill="color" />
    </svg>
  </i>
</template>
<script setup lang="ts" name="SvgIcon">
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
    default: '#ffffff',
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
const getStyle = computed((): CSSProperties => {
  const { size } = props
  let s = `${size}`
  s = `${s.replace('px', '')}px`
  return {
    fontSize: s,
  }
})
</script>

<style scoped lang="scss">
.el-icon {
  --color: inherit;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  font-size: inherit;
  line-height: 1em;
  color: var(--color);
  fill: currentColor;

  svg {
    width: 1em;
    height: 1em;
  }
}

.svg-icon-spin {
  animation: circle 1.5s infinite linear;
}

/* 旋转动画 */
@keyframes circle {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
