import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === 'pages' ? [{
      name: 'pages-preview-noindex',
      transformIndexHtml: () => [{
        tag: 'meta',
        attrs: { name: 'robots', content: 'noindex,nofollow' },
        injectTo: 'head' as const,
      }],
    }] : []),
  ],
  base: './',
  build: { outDir: mode === 'pages' ? 'docs' : 'dist', emptyOutDir: true },
}));
