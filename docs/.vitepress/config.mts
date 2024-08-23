import { defineConfig } from 'vitepress'
import { SidebarItem, generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wyatt's Blog",
  description: "Wyatt's Blog",
  appearance: "dark",
  lang: "zh",
  themeConfig: {
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "目录",
    sidebar: [
      {
        collapsed: false,
        items: [
          { text: '主页', link: '/start' },
        ]
      },
      {
        collapsed: false,
        text: "🌴 软件设计的哲学",
        items: generateSidebar({
          documentRootPath: '/docs/',
          scanStartPath: '/software'
        }) as SidebarItem[]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wyattzheng' }
    ],
    outline: {
      label: "菜单"
    },
  }
})
