const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  content: [
    './apps/brenden-codes/pages/**/*.{js,ts,jsx,tsx}',
    './apps/brenden-codes/components/**/*.{js,ts,jsx,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#333',
            code: {
              color: '#7E9FBE',
              fontWeight: '500',
              backgroundColor: '#2E3440',
              padding: '2px',
              borderRadius: '5px',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            img: {
              margin: 'auto',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.blue.300'),
            blockquote: {
              color: theme('colors.blue.100'),
            },
            a: {
              color: theme('colors.yellow.400'),
            },
            h1: {
              color: theme('colors.blue.300'),
            },
            h2: {
              color: theme('colors.blue.300'),
            },
            h3: {
              color: theme('colors.blue.300'),
            },
            h4: {
              color: theme('colors.blue.300'),
            },
            strong: {
              color: theme('colors.blue.300'),
              fontWeight: 600,
            },
          },
        },
      }),
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
