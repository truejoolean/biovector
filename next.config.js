
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
};

module.exports = withPlugins([
  [withOptimizedImages, {
  	optimizeImagesInDev: true
  }]
], nextConfig);