import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'


export default defineConfig({
  presets: [
    presetUno()
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ]
})
