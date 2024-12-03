import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'


export default defineConfig({
  plugins: [
    tsconfigPaths(),
  ],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'text'],
      include: ['src'],
    },
  },
})
