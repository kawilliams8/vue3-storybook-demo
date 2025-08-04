<script lang="ts" setup>
import { BBadge, BAlert, BProgress } from 'bootstrap-vue-next'
import { Icon } from '@iconify/vue'

// Component name for Vue devtools
defineOptions({
  name: 'TypographyComponent',
})

defineProps({
  // Text content
  title: {
    type: String,
    default: 'Typography Example',
  },
  subtitle: {
    type: String,
    default: 'A comprehensive typography showcase',
  },
  bodyText: {
    type: String,
    default:
      'This is a sample body text that demonstrates various typography styles and Bootstrap components.',
  },

  // Heading properties
  headingLevel: {
    type: String,
    default: 'h1',
    validator: (value: string) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value),
  },
  headingColor: {
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
        'muted',
        'white',
        'body',
        'body-secondary',
      ].includes(value),
  },

  // Text styling
  textAlignment: {
    type: String,
    default: 'left',
    validator: (value: string) => ['left', 'center', 'right', 'justify'].includes(value),
  },
  textTransform: {
    type: String,
    default: 'none',
    validator: (value: string) => ['none', 'lowercase', 'uppercase', 'capitalize'].includes(value),
  },
  fontWeight: {
    type: String,
    default: 'normal',
    validator: (value: string) => ['normal', 'bold', 'bolder', 'lighter'].includes(value),
  },

  // Colors
  textColor: {
    type: String,
    default: 'body',
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
        'muted',
        'white',
        'body',
        'body-secondary',
      ].includes(value),
  },

  // Display properties
  showBadge: {
    type: Boolean,
    default: false,
  },
  badgeText: {
    type: String,
    default: 'New',
  },
  badgeVariant: {
    type: String,
    default: 'primary',
    validator: (value: string) =>
      ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(
        value,
      ),
  },

  // List properties
  showList: {
    type: Boolean,
    default: false,
  },
  listItems: {
    type: Array,
    default: () => ['First item', 'Second item', 'Third item'],
  },

  // Alert properties
  showAlert: {
    type: Boolean,
    default: false,
  },
  alertMessage: {
    type: String,
    default: 'This is an alert message',
  },
  alertVariant: {
    type: String,
    default: 'info',
    validator: (value: string) =>
      ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(
        value,
      ),
  },

  // Progress properties
  showProgress: {
    type: Boolean,
    default: false,
  },
  progressValue: {
    type: Number,
    default: 75,
    validator: (value: number) => value >= 0 && value <= 100,
  },
  progressVariant: {
    type: String,
    default: 'primary',
    validator: (value: string) =>
      ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(
        value,
      ),
  },

  // Icon properties
  showIcon: {
    type: Boolean,
    default: false,
  },
  iconName: {
    type: String,
    default: 'bi:star',
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value: string) => ['left', 'right'].includes(value),
  },

  // Layout properties
  fullWidth: {
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
  <div :class="[fullWidth ? 'w-100' : '', customClass]">
    <!-- Heading with optional icon -->
    <component
      :is="headingLevel"
      :class="`text-${headingColor} text-${textAlignment} text-${textTransform} fw-${fontWeight === 'normal' ? 'normal' : fontWeight}`"
    >
      <Icon v-if="showIcon && iconPosition === 'left'" :icon="iconName" class="me-2" />
      {{ title }}
      <Icon v-if="showIcon && iconPosition === 'right'" :icon="iconName" class="ms-2" />
      <BBadge v-if="showBadge" :variant="badgeVariant as any" class="ms-2">{{ badgeText }}</BBadge>
    </component>

    <!-- Subtitle -->
    <p
      v-if="subtitle"
      :class="`text-${textColor} text-${textAlignment} text-${textTransform} fw-${fontWeight === 'normal' ? 'normal' : fontWeight}`"
      class="fs-5 mb-3"
    >
      {{ subtitle }}
    </p>

    <!-- Body text -->
    <p
      :class="`text-${textColor} text-${textAlignment} text-${textTransform} fw-${fontWeight === 'normal' ? 'normal' : fontWeight}`"
      class="mb-3"
    >
      {{ bodyText }}
    </p>

    <!-- Alert -->
    <BAlert v-if="showAlert" :variant="alertVariant as any" class="mb-3" show>
      {{ alertMessage }}
    </BAlert>

    <!-- Progress bar -->
    <BProgress
      v-if="showProgress"
      :value="progressValue"
      :variant="progressVariant as any"
      class="mb-3"
    />

    <!-- List -->
    <ul v-if="showList" class="list-group mb-3">
      <li
        v-for="(item, index) in listItems"
        :key="index"
        :class="`list-group-item text-${textColor}`"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
