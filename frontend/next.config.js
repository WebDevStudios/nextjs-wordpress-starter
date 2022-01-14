module.exports = {
  trailingSlash: true,
  swcMinify: true,
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(', ')
  }
}
