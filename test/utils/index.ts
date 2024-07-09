import { createGenerator } from '@unocss/core'
import { presetUno } from 'unocss'
import presetAnimations from '@/index'
import type { PresetAnimationsOptions } from '@/index'
import type { UnoGenerator } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'


interface GeneratorOptions {
  presetOptions?: PresetAnimationsOptions
  theme?: Theme
}


export function generator(options: GeneratorOptions = {}): UnoGenerator<Theme> {
  return createGenerator({
    presets: [
      presetUno({ preflight: false }),
      presetAnimations(options.presetOptions),
    ],
    theme: options.theme,
  })
}


export const uno = generator()
