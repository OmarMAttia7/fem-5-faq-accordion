module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      darkblue: 'hsl(238, 29%, 16%)',
      softblue: 'hsl(240, 73%, 65%)',
      red: 'hsl(14, 88%, 65%)',
      violet: 'hsl(273, 75%, 66%)',
      grayblue: {
        100: 'hsl(240, 5%, 91%)',
        200: 'hsl(240, 6%, 50%)',
        300: 'hsl(237, 12%, 33%)'
      },
      white: '#fff',
    },
    fontFamily: {
      'body': ['Kumbh Sans', 'Arial', 'Helvetica', 'sans-serif']
    },
    extend: {
      spacing: {
        'gr-1': '1rem',
        'gr-2': '1.618rem',
        'gr-3': '3.236rem',
        'gr-4': '6.472rem'
      },
      backgroundImage: {
        'hero-mobile': 'url(./images/illustration-woman-online-mobile.svg),  url(./images/bg-pattern-mobile.svg)',
        'hero-desktop': 'url(./images/illustration-woman-online-desktop.svg), url(./images/bg-pattern-desktop.svg)',
        'hero-box': 'url(./images/illustration-box-desktop.svg)'
      },
      backgroundPosition: {
        'hero-mobile': 'center,bottom center',
        'hero-desktop': '-160%, 130% 60%',
        'hero-box': 'center'
      },
      backgroundSize: {
        'hero-mobile': '250px, 250px',
        'hero-desktop': '90%, 200%',
        'hero-box': 'contain'
      },
    }
  },

  plugins: []
}
