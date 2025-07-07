import { defineConfig } from 'vitepress'
import { SidebarItem, generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wyatt's Blog",
  description: "Wyatt's Blog",
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
        collapsed: true,
        text: "🌴 思维体系",
        items: [
          {
            text: '【根本规律】', items: generateSidebar({
              documentRootPath: '/docs/',
              scanStartPath: '/software/ultimate'
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
      {
        collapsed: true,
        text: "⌚️ 时间线",
        link: '/journey',
        items: [
          { text: '', link: '' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wyattzheng' }
    ],
    outline: {
      label: "菜单"
    },
  }
})
