/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#C92071',
      'secondary': '#B5B6F2',
      'tertiary': '#991956',
      'error': '#EE4266',
      'success': '#52CA76',
      'warning': '#F6AA1C',
      'dark-gray': '#1F1F1F',
      'dark-gray-2': '#474747',
      'dark-gray-3': '#666666',
      'light-gray': '#8F8F8F',
      'light-gray-2': '#CCCCCC',
      'light-gray-3': '#F5F5F5',
      'white': '#FFFFFF'
    },
    width: {
      '1440': '1440px',
      '993': '993px',
      '559': '559px',
      '166': '166px',
      '102': '102px',
    },
    height: {
      '192': '192px',
      '129': '129px',
      '60': '60px',
      '28': '28px',
    },
    margin: {
      '34': '34px',
      '100': '100px',
      '27': '27px',
      '903': '532px',
      '50': '23px'
    },
    borderRadius: {
      'lpr': '8px'
    },
    inset: {
      '65': '65px',
      '408': '408px',
      '50': '50px',
      '991': '991px',
    },
    spacing: {
      '24': '24px'
    },
    opacity: {
      '60': '0.6',
      '0': '0',
    },
    gap: {
      '0': '0px',
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    fontSize: {
      '16': '14px',
    },
    letterSpacing: {
      '0.75': '0.75px',
    },
    lineHeight: {
      '28': '28px',
    },
  },
  plugins: [],
}


