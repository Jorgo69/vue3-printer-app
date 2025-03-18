module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xs': '256px', // 16rem
        '2xs': '288px', // 18rem
        'xs': '320px',  // 20rem
        'sm': '384px',  // 24rem
        'md': '448px',  // 28rem
        'lg': '512px',  // 32rem
        'xl': '576px',  // 36rem
        '2xl': '672px', // 42rem
        '3xl': '768px', // 48rem
        '4xl': '896px', // 56rem
        '5xl': '1024px',// 64rem
        '6xl': '1152px',// 72rem
        '7xl': '1280px',// 80rem
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        "8xl": ["6rem", {lineHeight: "1",},],
        "9xl": [  "8rem",  {lineHeight: "1",  },],
      },
      colors: {
        'custom-blue': '#1E90FF',
        'custom-green': '#32CD32',
      },
    },
  },
  plugins: [],
}