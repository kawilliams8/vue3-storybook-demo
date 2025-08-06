import type { Meta, StoryObj } from '@storybook/vue3'
import UPButton from '../components/UPButton.vue'

const meta: Meta<typeof UPButton> = {
  title: 'Components/UPButton',
  component: UPButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customized ultraPacer button built on top of Bootstrap Vue Next that supports various styles, sizes, and states.',
      },
    },
  },
  decorators: [
    () => ({
      template:
        '<div>400px wide container<div style="width: 400px; border: 1px solid lightgrey;padding: 10px;"><story /></div></div>',
    }),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'The text displayed on the button.',
    },
    variant: {
      control: { type: 'select' },
      options: [
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
      ],
      description: 'The Bootstrap button variant.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The Bootstrap button size.',
    },
    disabled: {
      control: 'boolean',
      description: 'Set whether the button is disabled or not.',
    },
    loading: {
      control: 'boolean',
      description: 'Set whether a loading spinner is shown and the button is disabled.',
    },
    icon: {
      control: 'text',
      description:
        'An Iconify icon name (e.g., bi:star, bi:heart, bi:arrow-right). Do not surround with quotes.',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'The position of the icon relative to the text.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Set whether the button takes full width of its container or not.',
    },
    rounded: {
      control: 'boolean',
      description: 'Set the button to rounded (pill shape) or not',
    },
    customClass: {
      control: 'text',
      description:
        'Any additional CSS classes to apply to the button. Do not surround with quotes, eg, text-uppercase.',
    },
    onClick: { action: 'clicked', description: 'Event emitted when button is clicked' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    label: 'ultraPacer',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    icon: '',
    iconPosition: 'left',
    fullWidth: false,
    rounded: false,
    customClass: '',
  },
}
