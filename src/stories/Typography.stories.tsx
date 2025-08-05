import type { Meta, StoryObj } from '@storybook/vue3'
import UPTypography from '../components/UPTypography.vue'

const meta: Meta<typeof UPTypography> = {
  title: 'Components/UPTypography',
  component: UPTypography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A comprehensive typography component that showcases various Bootstrap text styles, colors, and components including headings, text, badges, alerts, progress bars, and lists.',
      },
    },
  },
  argTypes: {
    // Text content
    title: {
      control: 'text',
      description: 'The main heading text',
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle text',
    },
    bodyText: {
      control: 'text',
      description: 'The body paragraph text',
    },

    // Heading properties
    headingLevel: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The heading level (h1-h6)',
    },
    headingColor: {
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
        'muted',
        'white',
        'body',
        'body-secondary',
      ],
      description: 'The color of the heading',
    },

    // Text styling
    textAlignment: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    textTransform: {
      control: { type: 'select' },
      options: ['none', 'lowercase', 'uppercase', 'capitalize'],
      description: 'Text transformation',
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['normal', 'bold', 'bolder', 'lighter'],
      description: 'Font weight',
    },

    // Colors
    textColor: {
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
        'muted',
        'white',
        'body',
        'body-secondary',
      ],
      description: 'The color of the text',
    },

    // Display properties
    showBadge: {
      control: 'boolean',
      description: 'Show a badge next to the heading',
    },
    badgeText: {
      control: 'text',
      description: 'The badge text',
    },
    badgeVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'The badge variant',
    },

    // List properties
    showList: {
      control: 'boolean',
      description: 'Show a list below the text',
    },
    listItems: {
      control: 'object',
      description: 'Array of list items',
    },

    // Alert properties
    showAlert: {
      control: 'boolean',
      description: 'Show an alert message',
    },
    alertMessage: {
      control: 'text',
      description: 'The alert message text',
    },
    alertVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'The alert variant',
    },

    // Progress properties
    showProgress: {
      control: 'boolean',
      description: 'Show a progress bar',
    },
    progressValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress bar value (0-100)',
    },
    progressVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'The progress bar variant',
    },

    // Icon properties
    showIcon: {
      control: 'boolean',
      description: 'Show an icon with the heading',
    },
    iconName: {
      control: 'text',
      description: 'Iconify icon name (e.g., "bi:star", "bi:heart", "bi:info-circle")',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to the heading',
    },

    // Layout properties
    fullWidth: {
      control: 'boolean',
      description: 'Make the component take full width',
    },
    customClass: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    title: 'Typography Example',
    subtitle: 'A comprehensive typography showcase',
    bodyText:
      'This is a sample body text that demonstrates various typography styles and Bootstrap components.',
  },
}

// Different heading levels
export const HeadingLevels: Story = {
  args: {
    title: 'Heading Examples',
    subtitle: 'Different heading levels',
    bodyText: 'This shows how different heading levels look.',
    headingLevel: 'h1',
  },
}

export const H2Heading: Story = {
  args: {
    title: 'H2 Heading',
    subtitle: 'Secondary heading',
    bodyText: 'This is an H2 heading example.',
    headingLevel: 'h2',
  },
}

// Different colors
export const PrimaryColor: Story = {
  args: {
    title: 'Primary Color',
    subtitle: 'Blue primary color',
    bodyText: 'This uses the primary color scheme.',
    headingColor: 'primary',
    textColor: 'primary',
  },
}

export const SuccessColor: Story = {
  args: {
    title: 'Success Color',
    subtitle: 'Green success color',
    bodyText: 'This uses the success color scheme.',
    headingColor: 'success',
    textColor: 'success',
  },
}

export const DangerColor: Story = {
  args: {
    title: 'Danger Color',
    subtitle: 'Red danger color',
    bodyText: 'This uses the danger color scheme.',
    headingColor: 'danger',
    textColor: 'danger',
  },
}

// Text alignment
export const CenteredText: Story = {
  args: {
    title: 'Centered Text',
    subtitle: 'All text is centered',
    bodyText: 'This demonstrates centered text alignment.',
    textAlignment: 'center',
  },
}

export const RightAligned: Story = {
  args: {
    title: 'Right Aligned',
    subtitle: 'All text is right-aligned',
    bodyText: 'This demonstrates right-aligned text.',
    textAlignment: 'right',
  },
}

// Text transformations
export const Uppercase: Story = {
  args: {
    title: 'Uppercase Text',
    subtitle: 'All text is uppercase',
    bodyText: 'This demonstrates uppercase text transformation.',
    textTransform: 'uppercase',
  },
}

export const Capitalized: Story = {
  args: {
    title: 'Capitalized Text',
    subtitle: 'All text is capitalized',
    bodyText: 'This demonstrates capitalized text transformation.',
    textTransform: 'capitalize',
  },
}

// Font weights
export const BoldText: Story = {
  args: {
    title: 'Bold Text',
    subtitle: 'All text is bold',
    bodyText: 'This demonstrates bold font weight.',
    fontWeight: 'bold',
  },
}

// With badge
export const WithBadge: Story = {
  args: {
    title: 'With Badge',
    subtitle: 'Heading with a badge',
    bodyText: 'This shows a heading with a badge.',
    showBadge: true,
    badgeText: 'New',
    badgeVariant: 'success',
  },
}

export const WithDangerBadge: Story = {
  args: {
    title: 'With Danger Badge',
    subtitle: 'Heading with a danger badge',
    bodyText: 'This shows a heading with a danger badge.',
    showBadge: true,
    badgeText: 'Warning',
    badgeVariant: 'danger',
  },
}

// With icon
export const WithIcon: Story = {
  args: {
    title: 'With Icon',
    subtitle: 'Heading with an icon',
    bodyText: 'This shows a heading with an icon.',
    showIcon: true,
    iconName: 'bi:star',
    iconPosition: 'left',
  },
}

export const WithRightIcon: Story = {
  args: {
    title: 'With Right Icon',
    subtitle: 'Heading with icon on the right',
    bodyText: 'This shows a heading with an icon on the right.',
    showIcon: true,
    iconName: 'bi:arrow-right',
    iconPosition: 'right',
  },
}

// With alert
export const WithAlert: Story = {
  args: {
    title: 'With Alert',
    subtitle: 'Typography with an alert',
    bodyText: 'This shows typography with an alert message.',
    showAlert: true,
    alertMessage: 'This is an important alert message!',
    alertVariant: 'warning',
  },
}

export const WithSuccessAlert: Story = {
  args: {
    title: 'With Success Alert',
    subtitle: 'Typography with a success alert',
    bodyText: 'This shows typography with a success alert.',
    showAlert: true,
    alertMessage: 'Operation completed successfully!',
    alertVariant: 'success',
  },
}

// With progress bar
export const WithProgress: Story = {
  args: {
    title: 'With Progress Bar',
    subtitle: 'Typography with a progress bar',
    bodyText: 'This shows typography with a progress bar.',
    showProgress: true,
    progressValue: 75,
    progressVariant: 'primary',
  },
}

export const WithSuccessProgress: Story = {
  args: {
    title: 'With Success Progress',
    subtitle: 'Typography with a success progress bar',
    bodyText: 'This shows typography with a success progress bar.',
    showProgress: true,
    progressValue: 90,
    progressVariant: 'success',
  },
}

// With list
export const WithList: Story = {
  args: {
    title: 'With List',
    subtitle: 'Typography with a list',
    bodyText: 'This shows typography with a list below.',
    showList: true,
    listItems: ['First important item', 'Second important item', 'Third important item'],
  },
}

export const WithCustomList: Story = {
  args: {
    title: 'With Custom List',
    subtitle: 'Typography with a custom list',
    bodyText: 'This shows typography with a custom list.',
    showList: true,
    listItems: [
      'Feature 1: Responsive design',
      'Feature 2: Bootstrap components',
      'Feature 3: Iconify integration',
    ],
  },
}

// Complex example
export const ComplexExample: Story = {
  args: {
    title: 'Complex Typography',
    subtitle: 'Multiple components together',
    bodyText: 'This demonstrates multiple typography components working together.',
    showBadge: true,
    badgeText: 'Featured',
    badgeVariant: 'info',
    showIcon: true,
    iconName: 'bi:star-fill',
    iconPosition: 'left',
    showAlert: true,
    alertMessage: 'This is a complex example with multiple components!',
    alertVariant: 'info',
    showProgress: true,
    progressValue: 85,
    progressVariant: 'success',
    showList: true,
    listItems: [
      'Component 1: Typography',
      'Component 2: Badges',
      'Component 3: Alerts',
      'Component 4: Progress',
    ],
  },
}

// Interactive playground
export const Playground: Story = {
  args: {
    title: 'Interactive Typography',
    subtitle: 'Customize all properties',
    bodyText: 'Use the controls to customize this typography component.',
    headingLevel: 'h1',
    headingColor: 'primary',
    textAlignment: 'left',
    textTransform: 'none',
    fontWeight: 'normal',
    textColor: 'body',
    showBadge: false,
    badgeText: 'New',
    badgeVariant: 'primary',
    showList: false,
    listItems: ['Item 1', 'Item 2', 'Item 3'],
    showAlert: false,
    alertMessage: 'Alert message',
    alertVariant: 'info',
    showProgress: false,
    progressValue: 75,
    progressVariant: 'primary',
    showIcon: false,
    iconName: 'bi:star',
    iconPosition: 'left',
    fullWidth: false,
    customClass: '',
  },
}
