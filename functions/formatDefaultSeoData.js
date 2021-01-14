/**
 * Format default SEO data for use in `DefaultSeo` component.
 *
 * @param {object} seoData Fallback SEO data.
 * @return {object}        Formatted SEO data.
 */
export default function formatDefaultSeoData(seoData) {
  return {
    title: seoData?.title ?? '',
    description: seoData?.metaDesc ?? '',
    noIndex: 'index' !== seoData?.metaRobotsNoindex,
    noFollow: 'follow' !== seoData?.metaRobotsNofollow,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: seoData?.canonical ?? '',
      site_name: '',
      images: [
        {
          url: seoData?.opengraphImage?.sourceUrl,
          alt: seoData?.opengraphImage?.altText
        }
      ]
    }
  }
}
