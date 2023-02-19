module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('apps/brenden-fyi/src/assets/images');
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
