/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F28123',
        'secondary': '#f8f9fa',
        'lightBg': '#fafafa',
        'lightSecondary': '#ffffff',
        'primaryText': '#2D3748',
        'secondaryText': '#4A5568',
        'darkPrimary': '#2D3748',
        'darkSecondary': '#4A5568',
        'darkLightBg': '#2D3748',
        'darkLightSecondary': '#4A5568',
        'darkPrimaryText': '#F8F9FA',
        'darkSecondaryText': '#E2E8F0',
      },

    },
  },
  plugins: [],
}

