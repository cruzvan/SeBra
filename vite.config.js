import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      base: '/SeBra/',
      resolve: {
        alias: {
          // FIX: `path.resolve('.')` resolves to the current working directory absolute path,
          // avoiding the explicit `process.cwd()` call which causes type errors in some configurations.
          '@': path.resolve('.'),
        }
      }
    };
});