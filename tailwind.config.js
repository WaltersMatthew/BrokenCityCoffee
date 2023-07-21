/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-image":
                    "url('https://brokencitypercussion.com/assets/theme/9914_1 - 9.jpg')",
            },
        },
    },
    plugins: [],
};
