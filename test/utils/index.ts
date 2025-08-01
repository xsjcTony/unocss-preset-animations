import type { PresetAnimationsOptions } from '@/index'
import type { UnoGenerator, UserConfig } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'
import { createGenerator } from '@unocss/core'
import * as prettier from 'prettier'
import { presetWind3 } from 'unocss'
import { presetAnimations } from '@/index'


interface GeneratorOptions extends Omit<UserConfig<Theme>, 'presets' | 'theme'> {
  presetOptions?: PresetAnimationsOptions
  theme?: Theme
}


export async function generator(options: GeneratorOptions = {}): Promise<UnoGenerator<Theme>> {
  return await createGenerator({
    ...options,
    presets: [
      presetWind3({ preflight: false }),
      presetAnimations(options.presetOptions),
    ],
    theme: options.theme,
  })
}


export const uno = await generator()


export async function formatCSS(css: string): Promise<string> {
  return await prettier.format(css, {
    tabWidth: 2,
    parser: 'css',
  })
}
