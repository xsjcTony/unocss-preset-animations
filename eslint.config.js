import defineConfig from '@aelita-dev/eslint-config'


export default defineConfig(
  {
    typescript: {
      tsconfigPath: ['./tsconfig.json', './tsconfig.node.js.json'],
      projectType: 'lib'
    },
    vue: {
      ruleOptions: {
        multiWordComponentNames: { ignores: ['Layout'] }
      }
    }
  },
  {
    files: ['docs/.vitepress/config.ts'],
    rules: {
      'ts/comma-dangle': ['error', 'always-multiline']
    }
  }
)
