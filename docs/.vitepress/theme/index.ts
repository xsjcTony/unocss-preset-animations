import 'virtual:uno.css'

import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'

import './style.scss'


export default {
  'extends': DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    // https://vitepress.dev/guide/extending-default-theme#layout-slots
  }),
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
