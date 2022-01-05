// Query partial: retrieve SEO post fields.
const seoPostFields = `
  seo {
    breadcrumbs {
      text
      url
    }
    fullHead
    metaRobotsNofollow
    metaRobotsNoindex
    title
  }
`

export default seoPostFields
