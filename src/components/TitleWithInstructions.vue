<script setup lang="ts">
import { BCollapse } from 'bootstrap-vue-next'
import RotatingCaret from './RotatingCaret.vue'

// Component name for Vue devtools
defineOptions({
  name: 'TitleWithInstructions',
})

defineProps<{ contentClass?: string; small?: boolean; title?: string }>()

const model = defineModel<boolean>({ default: true })

function onClick() {
  model.value = !model.value
}
</script>

<template>
  <div class="w-100">
    <div class="d-flex flex-row justify-content-start w-100">
      <div :class="'text-truncate ' + $props.contentClass">
        <strong style="cursor: pointer" @click="onClick"
          ><slot name="title">{{ $props.title }}</slot></strong
        >
      </div>
      <div
        class="ms-1"
        style="
          color: var(--bs-primary);
          cursor: pointer;
          margin-top: -0.1rem;
          align-content: center;
        "
        @click="onClick"
      >
        <IBiCaretDownFill v-if="model" />
        <IBiCaretRightFill v-else />
        <RotatingCaret :model="model" />
      </div>
    </div>
    <hr class="mt-0 mb-1" />
    <BCollapse v-model="model">
      <div :class="$props.small ? 'small' : ''">
        <slot />
      </div>
    </BCollapse>
  </div>
</template>
