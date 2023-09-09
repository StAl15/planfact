/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFFFFF", // white
                secondary: "#27363F", // ~black
                light: "#172444", // gray
                extra_light: "#1F2041", // light gray
                accent: "#2C9BA3", // green
                warning: "#DA1C1C", // red
                dark: '#494D50',
            },
            fontFamily: {
                "mulish": ["Mulish", 'sans-serif'],
            },
            boxShadow: {
                "headerShadow": "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
            }
        },
    },
    plugins: [],
}