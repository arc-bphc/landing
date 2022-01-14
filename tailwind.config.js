module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ],
      mono: ['Roboto Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace']
    },
    fontSize: {
      tiny: '0.625rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    keyframes: {
      slidein: {
        '0%': { transform: 'translateX(-16px)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' }
      }
    },
    animation: {
      'slide-in': 'slidein 0.2s ease-out'
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              fontStyle: 'light'
            },
            'blockquote p:first-of-type::before': {
              content: ''
            },
            'blockquote p:last-of-type::after': {
              content: ''
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
