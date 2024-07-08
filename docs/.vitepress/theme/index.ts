import 'virtual:uno.css'

import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'

import './style.scss'


export default {
  'extends': DefaultTheme,
  Layout: () => h(Layout, null, {}),
} satisfies Theme
