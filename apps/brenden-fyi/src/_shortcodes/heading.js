module.exports = function (icon, title) {
  return `
  <div class="flex items-center justify-center gap-x-2 my-4">
    ${this.eleventyConfig.icon(
      icon,
      'text-slate-600 dark:text-slate-300',
      25
    )} <h3 class="text-slate-600 dark:text-slate-300 text-2xl font-semibold">${title}</h3>
  </div>
`;
};
