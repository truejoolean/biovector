
// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       require('./util/sitemapGenerator')
//     }

//     return config
//   }
// }

/*
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  optimizeImagesInDev: true
  // your config for other plugins or the general next.js here...
});
*/

// next.config.js
/*
module.exports = {
  images: {
    domains: ['api.biovector.de'],
  },
}
*/


const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  images: {
  	domains: ['api.biovector.de']
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'de'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    // localeDetection: false // for dev only
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  },
};

module.exports = withPlugins([
  [withOptimizedImages, {
  	optimizeImagesInDev: true
  }]
], nextConfig);