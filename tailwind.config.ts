import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#08171C',
      },
      screens: {
        xs: '325px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1300px',
        '2xl': '1536px',
        '3xl': '2600px',
        '4xl': '3000px',
        '5xl': '3300px',
      },
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
