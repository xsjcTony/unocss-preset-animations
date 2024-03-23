import { CSS_VARIABLE_PREFIX, ENTER_ANIMATION_NAME, EXIT_ANIMATION_NAME } from '@/constants'
import type { Theme } from '@unocss/preset-mini'


export const theme: Theme = {
  animation: {
    keyframes: {
      [ENTER_ANIMATION_NAME]: `{from{opacity:var(${CSS_VARIABLE_PREFIX}-enter-opacity,1);transform:translate3d(var(${CSS_VARIABLE_PREFIX}-enter-translate-x,0),var(${CSS_VARIABLE_PREFIX}-enter-translate-y,0),0) scale3d(var(${CSS_VARIABLE_PREFIX}-enter-scale,1),var(${CSS_VARIABLE_PREFIX}-enter-scale,1),var(${CSS_VARIABLE_PREFIX}-enter-scale,1)) rotate(var(${CSS_VARIABLE_PREFIX}-enter-rotate,0))}}`,
      [EXIT_ANIMATION_NAME]: `{to{opacity:var(${CSS_VARIABLE_PREFIX}-exit-opacity,1);transform:translate3d(var(${CSS_VARIABLE_PREFIX}-exit-translate-x,0),var(${CSS_VARIABLE_PREFIX}-exit-translate-y,0),0) scale3d(var(${CSS_VARIABLE_PREFIX}-exit-scale,1),var(${CSS_VARIABLE_PREFIX}-exit-scale,1),var(${CSS_VARIABLE_PREFIX}-exit-scale,1)) rotate(var(${CSS_VARIABLE_PREFIX}-exit-rotate,0))}}`,
    },
  },
}
