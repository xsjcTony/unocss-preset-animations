import { defineBuildConfig } from 'unbuild'


export default defineBuildConfig({
  entries: [
    'src/index'
  ],
  clean: true,
  declaration: true,
  externals: [
    // TODO: add externals
  ],
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false
    }
  }
})
