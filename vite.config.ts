import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@layouts': '/src/layouts',
      '@components': '/src/components',
      '@types': '/src/types',
      '@store': '/src/store',
    },
  },
})
