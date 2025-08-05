// stories/TitleWithInstructions.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3'
import TitleWithInstructions from '../components/TitleWithInstructions.vue'

const meta: Meta<typeof TitleWithInstructions> = {
  title: 'Components/TitleWithInstructions',
  component: TitleWithInstructions,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A collapsible component with a title and hidden instructions that can be expanded/collapsed.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text to display',
    },
    contentClass: {
      control: 'text',
      description: 'Additional CSS classes for the content area',
    },
    small: {
      control: 'boolean',
      description: 'Whether to use small text for the content',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    title: 'Click to expand instructions',
  },
  render: (args) => ({
    components: { TitleWithInstructions },
    setup() {
      return { args }
    },
    template: `
      <TitleWithInstructions v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <div>
          <p>This is the collapsible content area. You can put any instructions or content here.</p>
          <ul>
            <li>Step 1: Read the instructions</li>
            <li>Step 2: Follow the steps</li>
            <li>Step 3: Complete the task</li>
          </ul>
        </div>
      </TitleWithInstructions>
    `,
  }),
}

// With custom styling
export const WithCustomStyling: Story = {
  args: {
    title: 'Custom styled instructions',
    contentClass: 'text-primary',
    small: true,
  },
  render: (args) => ({
    components: { TitleWithInstructions },
    setup() {
      return { args }
    },
    template: `
      <TitleWithInstructions v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <div>
          <p>This content has custom styling applied.</p>
          <p class="text-muted">This text is muted and smaller.</p>
        </div>
      </TitleWithInstructions>
    `,
  }),
}

// Long content example
export const LongContent: Story = {
  args: {
    title: 'Detailed Instructions',
  },
  render: (args) => ({
    components: { TitleWithInstructions },
    setup() {
      return { args }
    },
    template: `
      <TitleWithInstructions v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <div>
          <h6>Getting Started</h6>
          <p>This is a comprehensive guide with multiple sections and detailed instructions.</p>

          <h6>Prerequisites</h6>
          <ul>
            <li>Node.js version 20 or higher</li>
            <li>npm or yarn package manager</li>
            <li>Basic knowledge of Vue 3</li>
          </ul>

          <h6>Installation</h6>
          <ol>
            <li>Clone the repository</li>
            <li>Install dependencies with <code>npm install</code></li>
            <li>Run the development server</li>
          </ol>

          <h6>Usage</h6>
          <p>Follow these steps to use the component effectively in your project.</p>
        </div>
      </TitleWithInstructions>
    `,
  }),
}
