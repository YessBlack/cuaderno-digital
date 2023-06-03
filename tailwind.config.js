/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: '#3D0963',
      secondary: '#F59923',
      buttonPrimary: '#870B85',
      buttonSecondary: '#AC0C63',
      white: '#FFFFFF'
    },
    extend: {
      boxShadow: {
        custom: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
      }
    }
  },
  plugins: []
}
