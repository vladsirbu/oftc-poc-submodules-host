import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		sveltekit(),
		federation({
			name: 'oftc-root',
			remotes: {
				remote_navigation: "http://localhost:4002/assets/oftcNavigationRemoteEntry.js",
			},
			shared: []
		})
	]
});
