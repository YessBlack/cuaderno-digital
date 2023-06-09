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
      tertiary: '#D20026',
      buttonPrimary: '#870B85',
      buttonSecondary: '#AC0C63',
      buttonTertiary: '#E18D8D',
      borderColorIncomplete: '#FFDC26',
      borderColorComplete: '#51FF25',
      colorIncomplete: '#FFF9D9',
      colorComplete: '#DFFFDA',
      gray: '#8E8E8E',
      green: '#00DC23',
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
