export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/nuxt-notion/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dan\'s blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  publicRuntimeConfig: {
    notionPageId: '7b5afc64e8484277aaddd95c04131065'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'vue-notion/nuxt',
    '@nuxt/content'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-notion/nuxt',
    '@nuxt/content'
  ],
  // generate: {
  //   async routes () {
  //     const { $content } = require('@nuxt/content')
  //     const files = await $content({ deep: true }).only(['path']).fetch()
  //     return files.map(file => file.path === '/index' ? '/' : file.path)
  //   }
  // },
  content: {
    // https://content.nuxtjs.org/api/configuration
    dir: 'content',
    fullTextSearchFields: ['title', 'description', 'slug'],
    // editor: '~/path/to/editor/component.vue',
    // editor: '~/.nuxt/content/editor.vue',
    liveEdit: true,
    useCache: false,
    markdown: {
      remarkPlugins: ['remark-emoji'],
      prism: {
        theme: 'prism-themes/themes/prism-atom-dark.css'
      }
    },
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    },
    yaml: {},
    csv: {},
    xml: {},
    extendParser: {}
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
