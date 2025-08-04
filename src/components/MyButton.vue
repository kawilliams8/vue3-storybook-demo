<script lang="ts" setup>
import { BButton } from 'bootstrap-vue-next'
import { Icon } from '@iconify/vue'

defineProps({
  label: {
    type: String,
    default: 'Button',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) =>
      [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-danger',
        'outline-warning',
        'outline-info',
        'outline-light',
        'outline-dark',
      ].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value: string) => ['left', 'right'].includes(value),
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <BButton
    :variant="variant as any"
    :size="size as any"
    :disabled="disabled || loading"
    :class="[fullWidth ? 'w-100' : '', rounded ? 'rounded-pill' : '', customClass]"
  >
    <span
      v-if="loading"
      class="spinner-border spinner-border-sm me-2"
      role="status"
      aria-hidden="true"
    ></span>
    <Icon v-else-if="icon && iconPosition === 'left'" :icon="icon" class="me-2" />
    {{ label }}
    <Icon v-if="icon && iconPosition === 'right'" :icon="icon" class="ms-2" />
  </BButton>
</template>
