import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: null,
      precompress: false
    }),
    preprocess: vitePreprocess()
  }
};