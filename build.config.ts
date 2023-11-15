import { defineBuildConfig } from 'unbuild'


export default defineBuildConfig({
  entries: [
    'src/index'
  ],
  clean: true,
  declaration: true,
  externals: [
    '@unocss/core',
    '@unocss/preset-mini'
  ],
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false
    }
  },
  failOnWarn: false
})
