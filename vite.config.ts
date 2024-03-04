import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CookiesUiLib',
      fileName: 'cookies-ui-lib',
      formats: ['es', 'cjs', 'umd', 'iife']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  },
})
