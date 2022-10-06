import { acceptHMRUpdate, defineStore } from "pinia";

export const useSampleStore = defineStore("sample", {
  state: () => ({
    pinia: "🍍",
  }),
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSampleStore, import.meta.hot));
