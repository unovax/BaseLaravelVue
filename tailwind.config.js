/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2A2E45",
                    hover: "#1F2233",
                    text: "#F2F3F7",
                },
                secondary: {
                    DEFAULT: "#333333",
                    hover: "#000000",
                    text: "#FFFFFF",
                },
                danger: {
                    DEFAULT: "#FF0000",
                    hover: "#FF4545",
                    text: "#FFFFFF",
                },
                success: {
                    DEFAULT: "#165226",
                    hover: "#0c451b",
                    text: "#FFFFFF",
                },
                warning: {
                    DEFAULT: "#FFA500",
                    hover: "#FFA545",
                    text: "#FFFFFF",
                },
                info: {
                    DEFAULT: "#0000FF",
                    hover: "#4545FF",
                    text: "#FFFFFF",
                },
                dark: {
                    DEFAULT: "#333333",
                    hover: "#000000",
                    text: "#FFFFFF",
                },
                light: {
                    DEFAULT: "#FFFFFF",
                    hover: "#aaa",
                    text: "#333333",
                },
                input: {
                    DEFAULT: "#335",
                    hover: "#E5E6EA",
                    text: "#fff",
                },
            },
        },
    },
    plugins: [],
};
