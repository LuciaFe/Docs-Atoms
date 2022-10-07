const VueTypeImports = require("vite-plugin-vue-type-imports")
const Components = require("unplugin-vue-components/vite")
const Resolvers = require("unplugin-vue-components/resolvers")
const { HeadlessUiResolver } = Resolvers
const IconsResolver = require("unplugin-icons/resolver")
const Icons = require("unplugin-icons/vite")
const Loaders = require("unplugin-icons/loaders")
const { FileSystemIconLoader } = Loaders
const AutoImport = require("unplugin-auto-import/vite")
const path = require("path")
const { join } = path
const { mergeConfig } = require("vite")

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|mdx)",
  ],
  framework: "@storybook/vue3",
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        dedupe: ["@storybook/client-api"],
        alias: {
          "#app": `${__dirname}/mocks/useState.js`,
          "#head": `${__dirname}/mocks/useHead.js`,
        },
      },
      plugins: [
        VueTypeImports["default"](),
        Components({
          dirs: [join(__dirname, "../components")],
          deep: true,
          directoryAsNamespace: true,
          resolvers: [
            IconsResolver({
              prefix: false,
              customCollections: ["icons"],
              enabledCollections: ["ri"],
            }),
            HeadlessUiResolver(),
            (componentName) => {
              if (componentName === "AppLink") {
                return {
                  name: componentName,
                  path: join(
                    __dirname,
                    "../node_modules/@atoms-studio/nuxt-components/dist/runtime/components/AppLink.vue"
                  ),
                }
              }
              if (componentName === "AppPicture") {
                return {
                  name: componentName,
                  path: join(
                    __dirname,
                    "../node_modules/@atoms-studio/nuxt-components/dist/runtime/components/AppPicture.vue"
                  ),
                }
              }
              if (componentName === "AppAccordion") {
                return {
                  name: componentName,
                  path: join(
                    __dirname,
                    "../node_modules/@atoms-studio/nuxt-components/dist/runtime/components/AppAccordion.vue"
                  ),
                }
              }
              if (componentName === "AppCarousel") {
                return {
                  name: componentName,
                  path: join(
                    __dirname,
                    "../node_modules/@atoms-studio/nuxt-components/dist/runtime/components/AppCarousel.vue"
                  ),
                }
              }
              if (componentName === "AppAsideSlide") {
                return {
                  name: componentName,
                  path: join(
                    __dirname,
                    "../node_modules/@atoms-studio/nuxt-components/dist/runtime/components/AppAsideSlide.vue"
                  ),
                }
              }
              if (componentName === "AppModal") {
                return {
                  name: componentName,
                  path: join(
                    __dirname,
                    "../node_modules/@atoms-studio/nuxt-components/dist/runtime/components/AppModal.vue"
                  ),
                }
              }
            },
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
        AutoImport({
          imports: [
            "vue",
            "@vueuse/core",
            {
              [`${__dirname}/mocks/useState.js`]: ["useState"],
            },
            {
              [`${__dirname}/mocks/useHead.js`]: ["useHead"],
            },
            {
              [`${__dirname}/mocks/useModal.js`]: ["useModal"],
            },
            {
              [`${__dirname}/mocks/useNuxtApp.js`]: ["useNuxtApp"],
            },
            {
              [`${__dirname}/mocks/useUIState.ts`]: ["useUIState"],
            },
          ],
        }),
      ],
    })
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  staticDirs: [{ from: join(__dirname, "../public"), to: "/" }],
}
