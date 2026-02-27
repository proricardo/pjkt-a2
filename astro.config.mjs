import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://projekt.com.br',
  output: 'static',
  // Saída em /docs para ser versionada no repositório.
  // GitHub Pages suporta servir a partir de /docs na branch main.
  outDir: 'docs',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    // Sem underscore — Jekyll ignora pastas com '_'
    assets: 'assets',
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@content': path.resolve(__dirname, 'src/content'),
      },
    },
  },
});
