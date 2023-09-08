/** @type {import('tailwindcss').Config}*/
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
    extend: {
      colors: {
        primary: "#0099cc"
      },
      screens: {
        'mdl': '896px'
      }
    }
  }
}

