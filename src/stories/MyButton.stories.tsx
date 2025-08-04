import type { Meta, StoryObj } from '@storybook/vue3'
import MyButton from '../components/MyButton.vue'

const meta: Meta<typeof MyButton> = {
  title: 'Components/MyButton',
  component: MyButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable button component built with Bootstrap Vue Next that supports various styles, sizes, and states.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text displayed on the button',
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
      description: 'The Bootstrap button variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner and disables the button',
    },
    icon: {
      control: 'text',
      description: 'Iconify icon name (e.g., "bi:star", "bi:heart", "bi:arrow-right")',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to the text',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the button take full width of its container',
    },
    rounded: {
      control: 'boolean',
      description: 'Makes the button rounded (pill shape)',
    },
    customClass: {
      control: 'text',
      description: 'Additional CSS classes to apply to the button',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    label: 'Click me',
    variant: 'primary',
    size: 'md',
  },
}

// Primary button
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
}

// Secondary button
export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
}

// Success button
export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: 'success',
  },
}

// Danger button
export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
  },
}

// Different sizes
export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'lg',
  },
}

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
}

// Loading state
export const Loading: Story = {
  args: {
    label: 'Loading...',
    loading: true,
  },
}

// With icon (left)
export const WithIconLeft: Story = {
  args: {
    label: 'Star',
    icon: 'bi:star',
    iconPosition: 'left',
  },
}

// With icon (right)
export const WithIconRight: Story = {
  args: {
    label: 'Heart',
    icon: 'bi:heart',
    iconPosition: 'right',
  },
}

// With arrow icon
export const WithArrow: Story = {
  args: {
    label: 'Continue',
    icon: 'bi:arrow-right',
    iconPosition: 'right',
  },
}

// With download icon
export const WithDownload: Story = {
  args: {
    label: 'Download',
    icon: 'bi:download',
    iconPosition: 'left',
  },
}

// Full width
export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true,
  },
}

// Rounded
export const Rounded: Story = {
  args: {
    label: 'Rounded Button',
    rounded: true,
  },
}

// Outline variants
export const OutlinePrimary: Story = {
  args: {
    label: 'Outline Primary',
    variant: 'outline-primary',
  },
}

export const OutlineSuccess: Story = {
  args: {
    label: 'Outline Success',
    variant: 'outline-success',
  },
}

// Interactive playground
export const Playground: Story = {
  args: {
    label: 'Interactive Button',
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
