import unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import externalLinkIcon from './plugins/externalLinkIcon'


export default defineConfig({
  srcDir: './src',

  vite: {
    plugins: [
      unocss(),
    ],
  },

  lastUpdated: true,
  lang: 'en-US',
  appearance: 'dark',
  title: 'unocss-preset-animations',
  titleTemplate: ':title | unocss-preset-animations',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  description: '💅 An adaptation of the tailwindcss-animate Tailwind plugin for UnoCSS',
  markdown: {
    theme: {
      dark: 'material-theme-palenight',
      light: 'vitesse-light',
    },
    config: (md) => {
      md.use(externalLinkIcon)
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Animations Preset',

    editLink: {
      pattern: 'https://github.com/xsjcTony/unocss-preset-animations/edit/main/docs/src/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'algolia',
      options: {
        appId: '59LIXN9T8K',
        apiKey: 'c029fa22a73158f7b77eab5f47a4f33a',
        indexName: 'unocss-preset-animations-aelita',
      },
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Aelita (Tony Jiang)',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/', activeMatch: '^/guide/' },
      { text: 'Animations', link: '/animations/', activeMatch: '^/animations/' },
      {
        text: `v${version}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/xsjcTony/unocss-preset-animations/releases' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Comparisons', link: '/guide/comparisons' },
          { text: 'Migration Guide', link: '/guide/migration' },
        ],
      },
      {
        text: 'Animations',
        items: [
          { text: 'Base', link: '/animations/' },
          { text: 'Fade', link: '/animations/fade' },
          { text: 'Zoom', link: '/animations/zoom' },
          { text: 'Spin', link: '/animations/spin' },
          { text: 'Slide', link: '/animations/slide' },
          { text: 'Animation Properties', link: '/animations/animation-properties' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xsjcTony/unocss-preset-animations' },
    ],
  },
})
