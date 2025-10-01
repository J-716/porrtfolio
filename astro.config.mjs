import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [tailwind(), react()],
  site: 'https://j-designs-portfolio.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    },
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'radix-vendor': ['@radix-ui/react-icons']
          }
        }
      }
    }
  }
});

