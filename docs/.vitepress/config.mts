import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wyatt's Blog",
  description: "Wyatt's Blog",
  themeConfig: {
    returnToTopLabel: " ",
    sidebarMenuLabel: "目录",
    sidebar: [
      {
        collapsed: false,
        items: [
          { text: 'Start', link: '/start' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wyattzheng' }
    ]
  }
})
