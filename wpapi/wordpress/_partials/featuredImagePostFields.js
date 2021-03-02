// Query partial: retrieve featured image post fields.
const featuredImagePostFields = `
  featuredImage {
    node {
      altText
      sourceUrl(size: $imageSize)
    }
  }
`

export default featuredImagePostFields
