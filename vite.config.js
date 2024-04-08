import vue from '@vitejs/plugin-vue';
import path from 'path';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules'], additionalData: '@import "@/assets/styles/global.scss";',
      },
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
