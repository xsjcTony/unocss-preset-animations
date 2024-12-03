import 'virtual:uno.css'

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Layout from './Layout.vue'

import './style.scss'


export default {
  'extends': DefaultTheme,
  Layout: () => h(Layout, null, {}),
} satisfies Theme
