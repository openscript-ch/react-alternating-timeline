import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import packageJson from './package.json';

const makeExternalPredicate = (externals: string[]) => {
  if (externals.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externals.join('|')})($|/)`);
  return (id: string) => pattern.test(id);
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: packageJson.name,
      fileName: (format) => `react-alternating-timeline.${format}.js`,
    },
    rollupOptions: {
      external: makeExternalPredicate([
        // ...Object.keys(packageJson.dependencies),
        ...Object.keys(packageJson.peerDependencies),
      ]),
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['testSetup.ts'],
  },
  plugins: [
    react({
      exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
    }),
    dts(),
    cssInjectedByJsPlugin(),
  ],
});
