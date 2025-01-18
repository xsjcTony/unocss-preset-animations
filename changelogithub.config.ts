import type { ChangelogOptions } from 'changelogithub'


export default {
  types: {
    feat: { title: '🚀 Features' },
    fix: { title: '🐞 Bug Fixes' },
    perf: { title: '🔥 Performance' },
    refactor: { title: '💅 Refactors' },
    docs: { title: '📖 Documentation' },
    build: { title: '🛠️ Build' },
    types: { title: '🌊 Types' },
    examples: { title: '🏀 Examples' },
    test: { title: '🧪 Tests' },
    style: { title: '🎨 Styles' },
    ci: { title: '🤖 CI' },
    deps: { title: '📦 Dependencies' },
  },
} satisfies ChangelogOptions
