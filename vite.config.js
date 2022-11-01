import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), VitePWA()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
});
