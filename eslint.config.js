import { bundleRequire } from 'bundle-require'


export default await bundleRequire({ filepath: './eslintConfig.ts' })
  .then(({ mod }) => mod.default)
