module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./util/sitemapGenerator')
    }

    return config
  }
}