import unocssPlugin from '@unocss/vite'
import { defineConfig } from 'vitepress'
import externalLinkIcon from './plugins/externalLinkIcon'


export default defineConfig({
  outDir: './dist',
  srcDir: './src',

  vite: {
    plugins: [
      unocssPlugin(),
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
      light: 'min-light',
    },
    config: (md) => {
      md.use(externalLinkIcon)
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Animations Preset',
    // TODO: algolia
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/', activeMatch: '^/guide/' },
      { text: 'Animations', link: '/animations/', activeMatch: '^/animations/' },
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
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xsjcTony/unocss-preset-animations' },
    ],
  },
})
