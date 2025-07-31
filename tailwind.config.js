/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f8f5ff',
          100: '#f0ebff',
          200: '#e0d7ff',
          300: '#c5b3ff',
          400: '#a685ff',
          500: '#8a55ff',
          600: '#7c33ff',
          700: '#6b21f5',
          800: '#581dd0',
          900: '#4a1aa8',
        },
        'secondary': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'culinary': {
          'spice': '#e53e3e',
          'herb': '#38a169',
          'sauce': '#805ad5',
          'garnish': '#dd6b20',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'display': ['Montserrat', 'ui-sans-serif', 'system-ui'],
        'body': ['Open Sans', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('../assets/images/hero-bg.jpg')",
        'about-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('../assets/images/about-bg.jpg')",
        'contact-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/contact-bg.jpg')",
        'booking-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/images/booking-bg.jpg')",
      },
      boxShadow: {
        'food-card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'testimonial': '0 10px 25px rgba(0, 0, 0, 0.05)',
        'nav': '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
}