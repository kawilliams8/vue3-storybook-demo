<script lang="ts" setup>
defineOptions({
  name: 'UPTypographyComponent',
})

defineProps({
  // Text content
  title: {
    type: String,
    default: 'Demo Typography',
  },
  subtitle: {
    type: String,
    default: 'A comprehensive typography showcase',
  },
  bodyText: {
    type: String,
    default:
      'This is sample text that demonstrates various typography styles and BootstrapVueNext components.',
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

  // Layout properties
  customClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div :class="customClass">
    <!-- Heading -->
    <component
      :is="headingLevel"
      :class="`text-${headingColor} text-${textTransform} fw-${fontWeight === 'normal' ? 'normal' : fontWeight}`"
    >
      {{ title }}
    </component>

    <!-- Subtitle -->
    <p
      v-if="subtitle"
      :class="`text-${textColor} text-${textTransform} fw-${fontWeight === 'normal' ? 'normal' : fontWeight}`"
      class="fs-5 mb-3"
    >
      {{ subtitle }}
    </p>

    <!-- Body text -->
    <p
      :class="`text-${textColor} text-${textTransform} fw-${fontWeight === 'normal' ? 'normal' : fontWeight}`"
      class="mb-3"
    >
      {{ bodyText }}
    </p>
  </div>
</template>
