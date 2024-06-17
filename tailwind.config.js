/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('./assets/images/all/lawhero.svg')",
                'hero-two': "url('./assets/images/all/bg-hero-2.jpg')",
            },
            backgroundPosition: {
                '85%': '85%',
            },
        },
        fontFamily: {
            'marcellus': ['Marcellus', 'sans-serif'],

        },
    },
    plugins: [],
}

