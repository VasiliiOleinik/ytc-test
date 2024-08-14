import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteTsconfigPaths(),
    react({ include: '**/*.{jsx,tsx,js,ts}' }),
    tsconfigPaths(),
  ],
  server: {
    port: 4444,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
