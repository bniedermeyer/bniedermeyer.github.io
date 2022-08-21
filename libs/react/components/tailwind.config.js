const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#2d334a',
          DEFAULT: '#2d334a',
          light: '#fffffe',
        },
        secondary: {
          dark: '#d4d8f0',
          default: '#d4d8f0',
          light: '#e3f6f5',
        },
        tertiary: {
          dark: '#b8c1ec',
          DEFAULT: '#b8c1ec',
          light: '#bae8e8',
        },
      },
    },
  },
  plugins: [],
};
