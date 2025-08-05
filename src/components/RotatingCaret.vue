<script setup lang="ts">
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{ model?: boolean }>()

// only assign animation classes after interaction
const changed = ref(false)
watch(
  () => props.model,
  () => {
    changed.value = true
  },
  { once: true },
)
</script>

<template>
  <Icon
    icon="bi:caret-down-fill"
    v-if="model"
    :class="changed ? 'rotate-right' : ''"
    style="color: var(--bs-primary)"
  />
  <Icon
    icon="bi:caret-right-fill"
    v-else
    :class="changed ? 'rotate-left' : ''"
    style="color: var(--bs-primary)"
  />
</template>

<style scoped>
.rotate-left {
  animation: rotate-left 0.3s;
}

.rotate-right {
  animation: rotate-right 0.3s;
}

@keyframes rotate-left {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes rotate-right {
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
