/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                countAnim: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.5)" },
                },
                scaleAnim: {
                    "0%": { transform: "scale(0.8)" },
                    "100%": { transform: "scale(1)" },
                },
                scaleAnim2: {
                    "0%": { transform: "scale(0.9)" },
                    "100%": { transform: "scale(1)" },
                },
                runFrog: {
                    "0%": { opacity: "translateX(0)" },
                    "100%": { transform: "translateX(800px)" },
                },
                show: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                scaleAnim3: {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(2.5)" },
                },
                slideLeft: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(1000px)" },
                },
                slideRight: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-1000px)" },
                },
            },
            animation: {
                enter: "enter 3s linear infinite",
            },
            colors: {
                hotPink: "rgba(238, 174, 202, .8)",
            },
        },
    },
    plugins: [],
};
