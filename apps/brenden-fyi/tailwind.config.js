const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, './src/**/*.{njk,md,html,svg}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
    },
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
