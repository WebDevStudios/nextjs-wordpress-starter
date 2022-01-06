import seoPostFields from './seoPostFields'

// Query partial: retrieve homepage & site SEO fields.
const defaultSeoFields = `
  generalSettings {
    description
  }
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
        sourceUrl
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
