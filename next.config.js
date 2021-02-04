
// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       require('./util/sitemapGenerator')
//     }

//     return config
//   }
// }

// next.config.js
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  optimizeImagesInDev: true
  // your config for other plugins or the general next.js here...
});