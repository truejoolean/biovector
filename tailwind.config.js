// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js'
  ],
  // theme: {
  //   screens: {
  //     '2xl': {'max': '1535px'},
  //     // => @media (max-width: 1535px) { ... }

  //     'xl': {'max': '1279px'},
  //     // => @media (max-width: 1279px) { ... }

  //     'lg': {'max': '1023px'},
  //     // => @media (max-width: 1023px) { ... }

  //     'md': {'max': '767px'},
  //     // => @media (max-width: 767px) { ... }

  //     'sm': {'max': '639px'},
  //     // => @media (max-width: 639px) { ... }
  //   }
  // }
  theme: {
    screens: {
      'sm': {'max': '639px'},
  //     // => @media (max-width: 639px) { ... }
  
      'md': {'max': '767px'},
      //     // => @media (max-width: 767px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
    }
  }

}