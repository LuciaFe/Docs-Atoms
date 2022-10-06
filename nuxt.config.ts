import Components from "unplugin-vue-components/vite"
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers"
import IconsResolver from "unplugin-icons/resolver"
import Icons from "unplugin-icons/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import "dotenv/config"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/scss/app.scss"],
  modules: [
    // https://formkit.com/essentials/forms
    "@formkit/nuxt",
    // https://vueuse.org/functions.html
    "@vueuse/nuxt",
    // https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",
    // https://pinia.vuejs.org/introduction.html
    "@pinia/nuxt",
    // https://algolia.nuxtjs.org/ --> uncomment if you need algolia
    // "@nuxtjs/algolia",
    // https://github.com/cipami/nuxt-lodash#readme
    "nuxt-lodash",
    "vite-plugin-vue-type-imports/nuxt",
    "@atoms-studio/gluon",
    "@nuxtjs/i18n",
  ],
  components: {
    dirs: [
      {
        path: "~/components/cms",
        global: true,
      },
      "~/components",
    ],
  },
  build: {
    transpile: ["@headlessui/vue", "@atoms-studio/nuxt-components"],
  },
  router: {
    trailingSlash: true,
  },
  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: "en",
    },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
            customCollections: ["icons"],
          }),
          HeadlessUiResolver(),
        ],
        dts: true,
      }),
      Icons({
        customCollections: {
          icons: FileSystemIconLoader("./icons", (svg) => {
            const viewBox = /viewBox="\d+ \d+ (\d+) (\d+)"/gi.exec(svg)
            if (!viewBox) return svg
            const w = viewBox?.[1]
            const h = viewBox?.[2]
            svg = svg.replace(/width=".*?"/, `width="${w}" `)
            svg = svg.replace(/height=".*?"/, `height="${h}" `)
            return svg
          }),
        },
      }),
    ],
  },
})
