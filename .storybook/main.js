const react = require('@vitejs/plugin-react');
module.exports = {
  stories: ['../stories/*.mdx', '../src/**/*.stories.tsx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../docs'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
  ],
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins.filter((plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')));

    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      }),
    );
    if (configType === 'PRODUCTION') {
      return {
        ...config,
        base: './',
      };
    }
    return config;
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    docsPage: 'automatic',
  },
};
