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
  title: 'unocss-preset-tailwind-animate',
  titleTemplate: ':title | unocss-preset-tailwind-animate',
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
    siteTitle: 'unocss ❤ animate',
    // TODO: algolia
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
