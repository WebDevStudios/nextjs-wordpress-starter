// Query partial: retrieve SEO post fields.
const seoPostFields = `
  seo {
    canonical
    title
    metaDesc
    metaRobotsNofollow
    metaRobotsNoindex
    opengraphAuthor
    opengraphModifiedTime
    opengraphPublishedTime
    opengraphImage {
      altText
      sourceUrl(size: THUMBNAIL)
    }
  }
`

export default seoPostFields
