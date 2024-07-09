import { defineConfig } from '@aelita-dev/eslint-config'


export default defineConfig(
  {
    typescript: {
      tsconfigPath: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.node.js.json'],
      projectType: 'lib',
    },
    vue: {
      ruleOptions: {
        multiWordComponentNames: { ignores: ['Layout'] },
      },
    },
  },
)
