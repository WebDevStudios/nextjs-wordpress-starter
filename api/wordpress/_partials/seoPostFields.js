// Query partial: retrieve SEO post fields.
const seoPostFields = `
  seo {
    canonical
    title
    metaDesc
    metaRobotsNofollow
    metaRobotsNoindex
    opengraphImage {
      sourceUrl(size: THUMBNAIL)
    }
  }
`

export default seoPostFields
