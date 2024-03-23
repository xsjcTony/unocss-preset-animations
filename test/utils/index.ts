import { createGenerator } from '@unocss/core'
import { presetUno } from 'unocss'
import presetAnimations from '@/index'
import type { UnoGenerator } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'


export const generator = (theme?: Theme): UnoGenerator<Theme> => createGenerator({
  presets: [
    presetUno({ preflight: false }),
    presetAnimations(),
  ],
  theme,
})


export const uno = generator()
