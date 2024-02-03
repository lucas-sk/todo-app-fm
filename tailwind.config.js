const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        light: {
          900: '#484B6A',
          700: '#9394A5',
          300: '#D2D3DB',
          200: '#E4E5F1',
          100: '#FAFAFA',
        },
        dark: {
          900: '#161722',
          800: '#25273C',
          700: '#4D5066',
          600: '#393A4C',
          500: '#777A92',
          300: '#CACDE8',
          100: '#E4E5F1',
        },
        initial: {
          500: '#57DDFF',
        },
        end: {
          500: '#C058F3',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), function({ addUtilities }) {
    const newUtilities = {
      ".dark-border-gradient": {
        background: "transparent",
        "background-image": "linear-gradient(135deg, #25273C, #25273C), linear-gradient(135deg, #57DDFF,  #C058F3)",
        "background-clip": "padding-box, border-box",
        "background-origin": "border-box",
        "border": "1px solid transparent",
        "border-radius": "9999px",
      },
      ".dark-border-and-bg-gradient": {
        background: "transparent",
        "background-image": "linear-gradient(135deg, #57DDFF,  #C058F3), linear-gradient(135deg, #57DDFF,  #C058F3)",
        "background-clip": "padding-box, border-box",
        "background-origin": "border-box",
        "border": "1px solid transparent",
        "border-radius": "9999px",
      },
      ".light-border-gradient": {
        background: "transparent",
        "background-image": "linear-gradient(135deg, #FFF, #FFF), linear-gradient(135deg, #57DDFF,  #C058F3)",
        "background-clip": "padding-box, border-box",
        "background-origin": "border-box",
        "border": "1px solid transparent",
        "border-radius": "9999px",
      },
      ".light-border-and-bg-gradient": {
        background: "transparent",
        "background-image": "linear-gradient(135deg, #57DDFF,  #C058F3), linear-gradient(135deg, #57DDFF,  #C058F3)",
        "background-clip": "padding-box, border-box",
        "background-origin": "border-box",
        "border": "1px solid transparent",
        "border-radius": "9999px",
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover'])
  }],
}
