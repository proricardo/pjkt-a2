import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Quando o domínio customizado (projekt.com.br) estiver configurado no DNS,
// remova a variável BASE_PATH e defina base como ''.
// Enquanto o site estiver em proricardo.github.io/pjkt-a2, base = '/pjkt-a2'.
const base = process.env.BASE_PATH ?? '/pjkt-a2';

export default defineConfig({
  site: 'https://proricardo.github.io',
  base,
  output: 'static',
  outDir: 'docs',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
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
