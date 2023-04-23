const imageShortcode = require('./src/_shortcodes/image');
const iconShortcode = require('./src/_shortcodes/icon');
const headingShortcode = require('./src/_shortcodes/heading');
const formatDate = require('./src/_filters/formatDate');

module.exports = function (eleventyConfig) {
  eleventyConfig.addAsyncShortcode('image', imageShortcode);
  eleventyConfig.addShortcode('icon', iconShortcode);
  eleventyConfig.addPairedShortcode('heading', headingShortcode);
  eleventyConfig.addFilter('formatDate', formatDate);
  eleventyConfig.addPassthroughCopy('apps/brenden-fyi/src/assets/images/');
  return {
    dir: {
      input: 'apps/brenden-fyi/src',
      output: 'apps/brenden-fyi/_site',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};

