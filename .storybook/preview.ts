import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    viewMode: 'canvas',
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      exclude: ["className"],
    },
  },
};

export default preview;
