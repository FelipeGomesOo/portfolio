/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      'primary':{ 
        light:'#717c82',
        DEFAULT:'#53565a', 
        dark:'#36363d',
    },
      'blue': '#00c1da', 
      'green': '#00aa13', 
      'yellow': '#f6be00', 
      'pink': '#ce0058',
    },
    extend: {},
  },
  plugins: [],
}

