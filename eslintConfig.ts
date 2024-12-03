import { defineConfig } from '@aelita-dev/eslint-config'


export default defineConfig(
  {
    stylistic: {
      semi: false,
      commaDangle: 'always-multiline',
      indent: 2,
      quotes: 'single',
    },
    'import': {
      ruleOptions: {
        order: {
          typeImportsFirst: true,
        },
      },
    },
    typescript: {
      projectType: 'lib',
    },
    vue: {
      ruleOptions: {
        multiWordComponentNames: { ignores: ['Layout'] },
      },
    },
  },
)
