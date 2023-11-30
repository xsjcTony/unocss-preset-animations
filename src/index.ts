import { definePreset } from '@unocss/core'
import { rules } from '@/rules'
import { shortcuts } from '@/shortcuts'
import { theme } from '@/theme'


// This is for fixing the `rollup-plugin-dts` generating wrong import issue.
// eslint-disable-next-line ts/no-unused-vars
import type { Theme } from '@unocss/preset-mini'


export const presetAnimations = definePreset(() => ({
  name: 'unocss-preset-animations',
  theme,
  shortcuts,
  rules
}))


export default presetAnimations
