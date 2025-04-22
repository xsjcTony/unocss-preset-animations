import type { Theme } from '@unocss/preset-mini'
import {
  defineConfig,
  presetIcons,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'


export default defineConfig<Theme>({
  blocklist: ['outline'],
  presets: [
    presetWind3(),
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
