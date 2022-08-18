/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1400px' },
      // => @media (max-width: 1400px) { ... }

      xl: { min: '1280px', max: '1400px' },
      // => @media (min-width: 1280px and max-width: 1400px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      sm: { max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      xm: { max: '554px' },

      xs: { max: '480px' },
    },
    extend: {
      colors: {
        kakao: '#FEE500',
      },
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
};
