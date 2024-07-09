import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import type { Theme } from '@unocss/preset-mini'


export default defineConfig<Theme>({
  presets: [
    presetUno(),
    presetIcons(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--vp-c-brand-1)',
      },
    },
  },
})
