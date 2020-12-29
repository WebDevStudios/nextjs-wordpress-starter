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
      },
      fontSize: {
        'root-em': '16px',
        uber: '7rem',
        hero: '5rem',
        body: '1.125rem',
        sm: '1rem',
        caption: '0.875rem',
        xs: '0.75rem',
        xxs: '0.625rem',
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.875rem',
        h4: '1.625rem',
        h5: '1.25rem',
        lead: '1.5rem'
      },
      spacing: {
        // The px values for spacing are equivalent to their keys.
        px: '1px',
        0: '0',
        4: '0.25rem',
        8: '0.5rem',
        12: '0.75rem',
        16: '1rem',
        20: '1.25rem',
        24: '1.5rem',
        28: '1.75rem',
        32: '2rem',
        36: '2.25rem',
        40: '2.5rem',
        44: '2.75rem',
        48: '3rem',
        52: '3.25rem',
        56: '3.5rem',
        60: '3.75rem',
        64: '4rem',
        68: '4.25rem',
        72: '4.5rem',
        76: '4.75rem',
        80: '5rem'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
