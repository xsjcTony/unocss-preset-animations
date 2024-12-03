import { fileURLToPath } from 'node:url'
import { defineBuildConfig } from 'unbuild'


export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  externals: [
    /@unocss\/.+/,
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
    output: {
      exports: 'named',
    },
  },
  failOnWarn: false,
})
