const EleventyFetch = require('@11ty/eleventy-fetch');

const STORYBLOK_TOKEN = process.env.STORYBLOK_TOKEN;

module.exports = async function () {
  let url = `https://api.storyblok.com/v2/cdn/stories/resume?token=${STORYBLOK_TOKEN}`;
  return EleventyFetch(url, {
    type: 'json',
    duration: '0s',
    directory: 'apps/brenden-fyi/.cache/',
    removeUrlQueryParams: true,
  });
};
