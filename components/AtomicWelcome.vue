<template>
  <div class="flex flex-center flex-col items-center gap-4">
    <IconsAtoms class="w-40 h-auto" />
    <div class="text-white text-lg mb-4">{{ $t("welcome") }}</div>
    <div
      class="w-96 rounded-md text-left"
      v-for="feature of features"
      :key="feature.title"
    >
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="p-2 font-bold w-full bg-white"
          :class="open ? 'rounded-t-md' : 'rounded-md'"
        >
          {{ feature.title }}
        </DisclosureButton>
        <DisclosurePanel
          class="
            p-4
            leading-snug
            w-full
            text-center
            bg-[#333]
            text-white
            rounded-b-md
          "
        >
          {{ feature.text }}
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSampleStore } from "~/stores/sample";

const sampleStore = useSampleStore();

const features = ref([
  {
    title: "i18n ready",
    text: "English default language, config files in config folder.",
  },
  {
    title: "Headless UI Built in",
    text: "Components already auto-imported",
  },
  {
    title: `Pinia ${sampleStore.pinia}`,
    text: "Pinia composition store",
  },
]);
</script>

<style lang="scss" scoped></style>
