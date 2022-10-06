<template>
  <div class="share">
    <div v-if="props.url" class="wrapper">
      <ShareNetwork
        network="facebook"
        :title="props.title"
        :url="props.url"
        class="mr-2 h-6 w-6 last:mr-0"
      >
        <div class="wrapper-icon">Icon</div>
      </ShareNetwork>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ShareProps } from "./Share.props"
const props = defineProps<ShareProps>()
</script>

<style lang="scss" scoped>
.share {
}
</style>
