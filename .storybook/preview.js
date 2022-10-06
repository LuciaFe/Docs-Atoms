import "../assets/scss/app.scss"
import { plugin, defaultConfig } from "@formkit/vue"

import { createPinia } from "pinia"
// import { createI18n } from "vue-i18n";
import { app } from "@storybook/vue3"
// import en from "../locales/en.json";
import VueSocialSharing from "vue-social-sharing"

export const parameters = {}

// const i18n = createI18n({
//   locale: "en",
//   messages: {
//     en,
//   },
// });
const pinia = createPinia()
app.use(pinia)

app.use(plugin, defaultConfig)
// app.use(i18n);
app.use(VueSocialSharing)
