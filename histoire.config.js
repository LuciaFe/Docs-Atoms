import { defineConfig } from "histoire"
import { HstNuxt } from "@histoire/plugin-nuxt"
import { HstVue } from "@histoire/plugin-vue"

export default defineConfig({
  // your Histoire configuration
  vite: {},
  plugins: [HstVue(), HstNuxt()],
})
