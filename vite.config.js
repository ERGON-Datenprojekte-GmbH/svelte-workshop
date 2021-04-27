import svelte from '@sveltejs/vite-plugin-svelte';
const sveltePreprocess = require('svelte-preprocess');

import path from 'path';
import { defineConfig } from 'vite';

module.exports = defineConfig(({ command, mode }) => {
    const isProduction = mode === 'production';

    return {
        resolve: {
            alias: [{ find: '@src', replacement: path.resolve(__dirname, './src') }],
        },

        plugins: [svelte({ preprocess: sveltePreprocess({ postcss: true }) })],

        build: {
            minify: isProduction,
        },

        optimizeDeps: {
            exclude: ['tinro'],
        },

        server: { port: 5555 },
    };
});
