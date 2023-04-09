import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // ...
  },
  css: {
    preprocessorOptions: {
      // PostCSS options
      // ...
    },
    modules: {
      // Enable CSS modules for all CSS files in `src` folder
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
    }
  }
})