import type { PresetAnimationsOptions } from '@/index'
import type { UnoGenerator } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'
import { createGenerator } from '@unocss/core'
import { presetWind4 } from 'unocss'
import { presetAnimations } from '@/index'


interface GeneratorOptions {
  presetOptions?: PresetAnimationsOptions
  theme?: Theme
}


export async function generator(options: GeneratorOptions = {}): Promise<UnoGenerator<Theme>> {
  return await createGenerator({
    presets: [
      presetWind4({ preflights: { reset: false } }),
      presetAnimations(options.presetOptions),
    ],
    theme: options.theme,
  })
}


export const uno = await generator()
