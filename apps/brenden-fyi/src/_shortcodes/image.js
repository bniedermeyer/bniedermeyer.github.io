const Image = require('@11ty/eleventy-img');

async function imageShortcode(src, alt, css, sizes, loading) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ['webp', 'jpeg'],
    outputDir: 'apps/brenden-fyi/src/assets/images',
    urlPath: '/assets/images/',
    cacheOptions: {
      directory: 'apps/brenden-fyi/.cache',
    },
  });

  let imageAttributes = {
    class: css,
    alt,
    sizes,
    loading: loading ?? 'lazy',
    decoding: 'async',
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = imageShortcode;
