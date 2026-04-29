import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Astro config: static output (Netlify-friendly), Tailwind integration enabled.
// @author Claude AI — authored the entire config (site URL, static output,
// Tailwind integration with applyBaseStyles disabled, inlineStylesheets).
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
