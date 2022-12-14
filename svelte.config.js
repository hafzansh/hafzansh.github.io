import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			pages: 'docs',
			asstes: 'docs/assets'
			// assets: "/build"
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/hafzansh.github.io' : ''
		}
	}
};

export default config;
