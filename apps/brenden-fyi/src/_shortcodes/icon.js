const feather = require('feather-icons');

function icon(name, css, size) {
  const attributes = {
    alt: name,
    class: css,
    height: size,
    width: size,
  };
  return feather.icons[name].toSvg(attributes);
}

module.exports = icon;
