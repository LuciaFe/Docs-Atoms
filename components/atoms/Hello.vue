<script setup lang="ts">
import type { HelloProps } from "./Hello.props"
const props = defineProps<HelloProps>()
</script>

<template>
  <div class="hello-container">
    <p class="text-black">{{ title }}</p>
    <p class="text-black">{{ subtitle }}</p>
  </div>
</template>

<style scoped></style>
