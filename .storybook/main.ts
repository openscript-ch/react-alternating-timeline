import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ['../stories/*.mdx', '../src/**/*.stories.tsx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../docs'],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: {
          configureJSX: true,
          transcludeMarkdown: true,
        }
      }
    },
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
