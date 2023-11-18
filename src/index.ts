import { definePreset } from '@unocss/core'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { theme } from './theme'


export const presetAnimations = definePreset(() => ({
  name: 'unocss-preset-animations',
  theme,
  shortcuts,
  rules
}))


export default presetAnimations
