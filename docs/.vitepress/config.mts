import { defineConfig } from 'vitepress'
import { SidebarItem, generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wyatt's Blog",
  description: "Wyatt's Blog",
  appearance: "dark",
  lang: "zh",
  themeConfig: {
    logoLink: "/start",
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
        text: "🌴 软件开发的哲学",
        items: [
          {
            text: '【根本规律】', items: generateSidebar({
              documentRootPath: '/docs/',
              scanStartPath: '/software/ultimate'
            }) as SidebarItem[]
          },
          {
            text: '【普遍联系】', items: generateSidebar({
              documentRootPath: '/docs/',
              scanStartPath: '/software/contact'
            }) as SidebarItem[]
          },
          {
            text: '【底层原理】', items: generateSidebar({
              documentRootPath: '/docs/',
              scanStartPath: '/software/formula'
            }) as SidebarItem[]
          },
          
        ]
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
