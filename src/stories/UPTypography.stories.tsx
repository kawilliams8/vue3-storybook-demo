import type { Meta, StoryObj } from '@storybook/vue3'
import UPTypography from '../components/UPTypography.vue'

const meta: Meta<typeof UPTypography> = {
  title: 'Components/UPTypography',
  component: UPTypography,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A comprehensive typography component that showcases various Bootstrap text styles, colors, and components including headings, a subtitle and body text.',
      },
    },
  },
  decorators: [
    () => ({
      template: `
        <div style="max-width: 800px; background: #f8f9fa; padding: 1rem; margin: auto;">
          <story />
        </div>
      `,
    }),
  ],
  argTypes: {
    title: { control: 'text', description: 'The main heading text' },
    subtitle: { control: 'text', description: 'The subtitle text' },
    bodyText: { control: 'text', description: 'The body paragraph text' },

    headingLevel: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The heading level',
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
      description: 'Heading color',
    },
    textTransform: {
      control: { type: 'select' },
      options: ['none', 'lowercase', 'uppercase', 'capitalize'],
      description: 'Text transform',
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['normal', 'bold', 'bolder', 'lighter'],
      description: 'Font weight',
    },
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
      description: 'Text color',
    },
    customClass: {
      control: 'text',
      description: 'Custom Bootstrap CSS classes, eg, text-uppercase',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    title: 'This is a UPTypography Heading',
    subtitle: 'This is a subtitle',
    bodyText:
      'This is body text. Doggo ipsum blep heckin good boys and girls porgo waggy wags heckin doggo, big ol noodle horse very taste wow. Lotsa pats very taste wow long water shoob doge heckin good boys and girls maximum borkdrive you are doin me a concern fluffer.',
    headingLevel: 'h1',
    headingColor: 'primary',
    textTransform: 'none',
    fontWeight: 'normal',
    textColor: 'body',
    customClass: '',
  },
}
