import seoPostFields from './seoPostFields'

// Query partial: retrieve homepage & site SEO fields.
const defaultSeoFields = `
  homepageSettings {
    frontPage {
      ${seoPostFields}
    }
  }
  siteSeo: seo {
    schema {
      siteName
      siteUrl
    }
    openGraph {
      defaultImage {
        altText
        sourceUrl(size: THUMBNAIL)
      }
    }
    social {
      facebook {
        url
      }
      instagram {
        url
      }
      linkedIn {
        url
      }
      mySpace {
        url
      }
      pinterest {
        url
      }
      twitter {
        username
      }
      wikipedia {
        url
      }
      youTube {
        url
      }
    }
  }
`

export default defaultSeoFields
