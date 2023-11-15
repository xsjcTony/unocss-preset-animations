import { ENTER_ANIMATION_NAME, EXIT_ANIMATION_NAME } from './constants'
import type { Theme } from '@unocss/preset-mini'


export const theme: Theme = {
  animation: {
    keyframes: {
      [ENTER_ANIMATION_NAME]: '{from{opacity:var(--una-enter-opacity,1);transform:translate3d(var(--una-enter-translate-x,0),var(--una-enter-translate-y,0),0) scale3d(var(--una-enter-scale,1),var(--una-enter-scale,1),var(--una-enter-scale,1)) rotate(var(--una-enter-rotate,0))}}',
      [EXIT_ANIMATION_NAME]: '{to{opacity:var(--una-exit-opacity,1);transform:translate3d(var(--una-exit-translate-x,0),var(--una-exit-translate-y,0),0) scale3d(var(--una-exit-scale,1),var(--una-exit-scale,1),var(--una-exit-scale,1)) rotate(var(--una-exit-rotate,0))}}'
    }
  }
}
