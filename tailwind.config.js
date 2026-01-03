/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          background: '#000000',
          text: '#E5E7EB',
        },
        section: {
          background: '#1A1A1A',
        },
        accent: {
          gold: '#FACC15',
        },
        highlight: {
          text: '#FFFFFF',
        },
        button: {
          text: '#000000',
        },
        light: {
          primary: {
            background: '#FFFFFF',
            text: '#1F2937',
          },
          section: {
            background: '#F9FAFB',
          },
          highlight: {
            text: '#111827',
          },
        },
      },
    },
  },
  plugins: [],
}

