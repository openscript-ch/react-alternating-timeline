module.exports = {
  stories: ['../stories/*.mdx', '../src/**/*.stories.tsx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../docs'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials', options: {
        docs: {
          configureJSX: true,
          transcludeMarkdown: true,
        }
      }
    },
    '@storybook/addon-storysource',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/react-vite',
  },
};
