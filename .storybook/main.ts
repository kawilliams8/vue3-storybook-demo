import type { StorybookConfig } from '@storybook/vue3-vite'
import Icons from 'unplugin-icons/vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-onboarding'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || []
    config.plugins.push(
      Icons({
        compiler: 'vue3',
        autoInstall: true,
      }),
    )
    return config
  },
}
export default config
