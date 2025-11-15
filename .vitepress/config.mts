import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/sig-op/',
  title: "HC1 OP SIG",
  description: "HyperCore One OP SIG",
  rewrites: {
    'README.md': 'index.md',
    '(.*)/README.md': '(.*)/index.md'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Matrix', link: 'https://matrix.to/#/#zenon-sigs:zenon.chat' },
      { text: 'Forum', link: 'https://forum.hypercore.one/' }
    ],

    sidebar: [
      {
        text: 'OP SIG',
        items: [
          { text: 'Initiatives', link: '/initiatives/'},
        ]
      },
      {
        text: 'Active Initiatives',
        items: [
          { text: 'OP-001: Initial Setup', link: '/initiatives/op-001'},
          { text: 'OP-002: Nostr-Based Network Coordination', link: '/initiatives/op-002'},
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/hypercore-one/sig-op/edit/master/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hypercore-one/sig-op' }
    ]
  }
})
