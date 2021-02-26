const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer({
  images: {
    domains: ['nextjs.wpengine.com', 'nextjsdevstart.wpengine.com', 'nextjswp.test']
  }
})
