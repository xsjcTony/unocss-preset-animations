import defineConfig from '@aelita-dev/eslint-config'


export default defineConfig(
  {
    typescript: {
      tsconfigPath: ['./tsconfig.json', './tsconfig.node.js.json']
    }
  }
)
