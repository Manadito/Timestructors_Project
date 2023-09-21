import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  // Changing the default port from :5173 to :3000
  server: {
    port: 3000,
  },
  // Changing the default build directory from `dist` to `build`
  build: {
    outDir: 'build',
  },
});
