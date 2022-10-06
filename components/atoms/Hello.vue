<script setup lang="ts">
import type { HelloProps } from "./Hello.props"
const props = defineProps<HelloProps>()

const text = computed(() => props.text)
</script>

<template>
  <div class="hello">
    {{ text }}
  </div>
</template>

<style scoped></style>
