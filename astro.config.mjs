// @ts-check
import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-build-blog.netlify.app',
	integrations: [preact(), svelte()],
	vite: {
		plugins: [tailwindcss()]
	}
})
