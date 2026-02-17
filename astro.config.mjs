import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';

import vercel from '@astrojs/vercel';
import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

const env = loadEnv(import.meta.env.MODE, process.cwd(), '');
const {
    NETLIFY,
    STORYBLOK_DELIVERY_API_TOKEN,
    STORYBLOK_API_BASE_URL,
    STORYBLOK_REGION,
} = env;

export default defineConfig({
    integrations: [storyblok({
        accessToken: STORYBLOK_DELIVERY_API_TOKEN,
        apiOptions: {
            /** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
            region: STORYBLOK_REGION || 'eu',
            /** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
            endpoint: STORYBLOK_API_BASE_URL
                ? `${new URL(STORYBLOK_API_BASE_URL).origin}/v2`
                : undefined,
        },
        components: {
            page: 'storyblok/Page',
            button: 'storyblok/Button',
            grid: 'storyblok/Grid',
            grid_item: 'storyblok/GridItem',
            section: 'storyblok/Section',
            text: 'storyblok/Text',
            retro_window: 'storyblok/RetroWindow',
            image: 'storyblok/Image',
            retro_image: 'storyblok/RetroImage',
            badge: 'storyblok/Badge',
            alert: 'storyblok/Alert',
            card: 'storyblok/Card',
        },
        }), react()],
    output: 'server',
    adapter: NETLIFY ? netlify() : vercel(),
    vite: {
        plugins: [mkcert(), tailwindcss()],
    },
    image: {
        domains: ['a.storyblok.com', 'a2.storyblok.com'],
        remotePatterns: [{ protocol: "https" }],
    },
});