/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import vuePlugin from '@vitejs/plugin-vue';

const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)', // Added support for `.vue` files
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite', // Ensures compatibility with Vite and Vue 3
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite', // Explicitly use Vite as the builder
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite'); // Dynamically import Vite's mergeConfig
    return mergeConfig(config, {
      plugins: [vuePlugin()], // Include Vue plugin explicitly
      optimizeDeps: {
        include: ['@storybook/vue3'], // Pre-optimize dependencies for Storybook
      },
    });
  },
};

export default config;
