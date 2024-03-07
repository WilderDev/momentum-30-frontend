const plugin = require('tailwindcss/plugin');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/lib/theme/dynamicColors.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-baskervville)', ...fontFamily.serif],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        text: 'text 5s ease infinite',
        'fade-in-up': 'fade-in-up 400ms ease-out',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(({ addVariant }) => addVariant('hocus', ['&:hover', '&:focus'])),
    plugin(({ addVariant }) => addVariant('around', ['&:before', '&:after'])),
    plugin(({ addVariant, e }) => {
      addVariant('peer', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`peer${separator}${className}`)}:hover, .${e(
            `peer${separator}${className}`,
          )}:focus, .${e(`peer${separator}${className}`)}:active, .${e(
            `peer${separator}${className}`,
          )}:visited`;
        });
      });
    }),
  ],
};
