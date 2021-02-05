import StoryblokClient from 'storyblok-js-client';

const { NEXT_PUBLIC_STORYBLOK_TOKEN } = process.env;

export const Storyblok = new StoryblokClient({
  accessToken: NEXT_PUBLIC_STORYBLOK_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});
