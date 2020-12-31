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
      }
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
    },
    colors: {
      primary: {
        lightest: '#FCD0C4',
        lighter: '#F9A189',
        light: '#F78161',
        DEFAULT: '#F5623A',
        dark: '#DD5834',
        darker: '#AC4529',
        darkest: '#622717'
      },
      secondary: {
        lightest: '#D2E9FA',
        lighter: '#A5D4F5',
        light: '#62B3EE',
        DEFAULT: '#1F93E7',
        dark: '#1976B9',
        darker: '#104A74',
        darkest: '#092C45'
      },
      tertiary: {
        lightest: '#ECECEC',
        lighter: '#C6C6C6',
        light: '#7A7A7A',
        DEFAULT: '#414141',
        dark: '#343434',
        darker: '#272727',
        darkest: '#1A1A1A'
      },
      success: {
        lightest: '#D1EEDD',
        lighter: '#A3DDBC',
        light: '#5DC389',
        DEFAULT: '#18A957',
        dark: '#11763D',
        darker: '#0A4423',
        darkest: '#052211'
      },
      warning: {
        lightest: '#FFF1D7',
        lighter: '#FFE4AF',
        light: '#FFCF74',
        DEFAULT: '#FFBB38',
        dark: '#B38327',
        darker: '#664B16',
        darkest: '#33250B'
      },
      error: {
        lightest: '#F9D0D9',
        lighter: '#F2A2B3',
        light: '#E95C7B',
        DEFAULT: '#DF1642',
        dark: '#9C0F2E',
        darker: '#2D040D',
        darkest: '#2D040D'
      },
      grey: {
        lightest: '#FCFCFC',
        lighter: '#E6E6E6',
        light: '#939393',
        DEFAULT: '#666666',
        dark: '#5C5C5C',
        darker: '#333333',
        darkest: '#212121'
      },
      white: {
        DEFAULT: 'rgba(255,255,255,1)',
        90: 'rgba(255,255,255,0.9)',
        80: 'rgba(255,255,255,0.8)',
        70: 'rgba(255,255,255,0.7)',
        60: 'rgba(255,255,255,0.6)',
        50: 'rgba(255,255,255,0.5)',
        40: 'rgba(255,255,255,0.4)',
        30: 'rgba(255,255,255,0.3)',
        20: 'rgba(255,255,255,0.2)',
        10: 'rgba(255,255,255,0.1)',
        5: 'rgba(255,255,255,0.05)'
      },
      brand: {
        android: '#A4C639',
        behance: '#1769FF',
        dribble: '#EA4C89',
        dropbox: '#0061FF',
        facebook: '#3B5998',
        github: '#4078C0',
        hangouts: '#23A061',
        instagram: '#4C5FD7',
        linkedin: '#0077B5',
        medium: '#292929',
        meetup: '#EA2245',
        messenger: '#1787FB',
        paypal: '#253B80',
        pinterest: '#CB2027',
        producthunt: '#D85537',
        shopify: '#96BE4F',
        skype: '#00AFF0',
        slack: '#6ECADC',
        spotify: '#1ED760',
        trello: '#117ABD',
        twitter: '#00B6F1',
        vimeo: '#45BBFF',
        whatsapp: '#25E47A',
        youtube: '#FF0000'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
