import { definePreset } from '@unocss/core'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { theme } from './theme'


export const presetTailwindAnimate = definePreset({
  name: 'unocss-preset-tailwind-animate',
  theme,
  shortcuts,
  rules
})


export default presetTailwindAnimate
