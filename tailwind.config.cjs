/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    'index.html',
    'components.html',
    'services.html',
    'contacts.html',
    'about-us.html'
  ],
  theme: {
    extend: {
      keyframes: {
        open_in: {
          '0%': { display: 'none' },
          '1%': {display: 'block'},
          '100%': { display: 'block'},
        }
      },
      colors: {
        'primary':'#F11158',
        'primary-hover':'#F4417A',
        'primary-pressed': '#D40E4D',
        'secondary': '#82CCE5',
        'secondary-hover':'#90D1E7',
        'secondary-pressed': '#90D1E7',
        
      },
      fontSize: {
        '2.5xl': ['28px','34px']
      },  
      dropShadow: {
        'xl': '0px 1px 24px rgba(0, 27, 37, 0.08)',
      }
    },
  },
  plugins: [],
}
