import { definePreset } from '@unocss/core'
import { rules } from '@/rules'
import { shortcuts } from '@/shortcuts'
import { theme } from '@/theme'


export interface PresetAnimationsOptions {
  /**
   * The unit of time options
   *
   * @default 'ms'
   */
  unit?: 's' | 'ms'

  /**
   * Default delay of animations
   */
  delay?: number

  /**
   * Default direction of animations
   */
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'

  /**
   * Default duration of animations
   */
  duration?: number

  /**
   * Default fill mode of animations
   */
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both'

  /**
   * Default iteration count of animations
   */
  iterationCount?: number | 'infinite'

  /**
   * Default play state of animations
   */
  playState?: 'running' | 'paused'

  /**
   * Default timing function of animations
   */
  timingFunction?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | string
}


export const presetAnimations = definePreset((options: PresetAnimationsOptions = {}) => {
  options.unit = options.unit ?? 'ms'

  return {
    name: 'unocss-preset-animations',
    theme,
    shortcuts: shortcuts(options),
    rules,
  }
})


export default presetAnimations
