/** @type { import('@storybook/vue3-vite').StorybookConfig } */
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
  viteFinal: async (config) => {
    const vuePlugin = require('@vitejs/plugin-vue'); // Include Vite plugin for Vue
    config.plugins.push(vuePlugin());
    return config;
  },
};
export default config;
