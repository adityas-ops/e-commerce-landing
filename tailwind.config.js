/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      'primary': '#FF902A',
      'secondary': '#2F2105',
      'tercary':'#F9D9AA',
      'cuaternary':'#F6EBDA',
      'slate':'rgb(107 114 128);',
      'white':'#FFFFFF',
      'white-300':'#cbd5e1',
      'black-400':'rgba(0, 0, 0, 0.673)'
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}
