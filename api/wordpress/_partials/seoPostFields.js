// Query partial: retrieve SEO post fields.
const seoPostFields = `
  seo {
    canonical
    title
    metaDesc
    metaRobotsNofollow
    metaRobotsNoindex
    opengraphImage {
      sourceUrl
    }
  }
`

export default seoPostFields
