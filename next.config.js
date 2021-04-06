module.exports = {
  future: {
    webpack5: true
  },
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(', ')
  }
}
