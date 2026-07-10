// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://zysishuiyears.github.io',
	output: 'static',
	trailingSlash: 'always',
	integrations: [sitemap()],
});
