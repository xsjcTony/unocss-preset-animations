import { fileURLToPath } from 'node:url'
import { defineBuildConfig } from 'unbuild'


export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  externals: [
    '@unocss/core',
    '@unocss/preset-mini',
    '@unocss/preset-mini/utils',
  ],
  alias: {
    '@': fileURLToPath(new URL('src', import.meta.url)),
  },
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false,
    },
    inlineDependencies: true,
  },
  failOnWarn: false,
})
