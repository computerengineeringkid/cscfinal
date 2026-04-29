import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Astro config: static output (Netlify-friendly), Tailwind integration enabled.
export default defineConfig({
  site: 'https://strafe-inbox-ai.netlify.app',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
