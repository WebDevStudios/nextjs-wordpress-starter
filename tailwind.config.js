module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      safelistPatterns: [/^(bg-)/, /^(text-)/, /^(w-)/, /^(noUi-)/]
    }
  },
  darkMode: 'media',
  theme: {
    extend: {
      container: {
        center: true,
        margin: 'auto'
      },
      fontFamily: {
        sans: ['Libre Franklin', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif']
      }
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
