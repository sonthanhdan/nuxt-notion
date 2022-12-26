
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  // router: {
  //   base: '/nuxt-notion/'
  // },
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
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora%3A400%2C400italic%2C700%2C700italic%7CMontserrat%3A400%2C700%7CMaven+Pro%3A400%2C700&ver=6.1.1' },
      { rel: 'icon', type: 'image/x-icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>' }
    ]
  },
  publicRuntimeConfig: {
    notionPageId: '7b5afc64e8484277aaddd95c04131065'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/globals.css',
    '~/assets/css/svgicons.css'
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
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-notion/nuxt',
    '@nuxt/content',
    '@nuxt/postcss8'
  ],
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()
      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    watch: {
      ws: {
        port: 4000,
        hostname: 'localhost',
        showURL: false
      }
    },
    dir: 'content',
    fullTextSearchFields: ['title', 'description', 'slug'],
    // editor: '~/path/to/editor/component.vue',
    // editor: '~/.nuxt/content/editor.vue',
    liveEdit: true,
    useCache: false,
    markdown: {
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

  hooks: {
    'content:file:beforeParse': (file) => {
      if (file.extension !== '.md') return
      file.data = file.data.replace(/react/g, 'vue')
    },
    'content:file:beforeInsert': async (document, database) => {
      if (document.extension === '.md') {
        const { time } = require('reading-time')(document.text)
        document.readingTime = time
      }

      if (document.extension === '.json' && document.body) {
        const data = await database.markdown.toJSON(document.body)
        Object.assign(document, data)
      }

    },
    'content:options': (options) => {
      console.log('Content options:', options)
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
