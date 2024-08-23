// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from '../theme-default'
import './style.css'

export default {
  extends: DefaultTheme,
} satisfies Theme
