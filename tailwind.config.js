/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,svelte}",
  ]
}

