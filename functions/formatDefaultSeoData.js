/**
 * Format default SEO data for use in `DefaultSeo` component.
 *
 * @param {object} seoData Fallback SEO data.
 * @return {object}        Formatted SEO data.
 */
export default function formatDefaultSeoData(seoData) {
  const homepage = seoData?.homepageSettings?.frontPage?.seo
  const siteSeo = seoData?.siteSeo

  return {
    title: homepage?.title ?? '',
    description: homepage?.metaDesc ?? '',
    noIndex: 'index' !== homepage?.metaRobotsNoindex,
    noFollow: 'follow' !== homepage?.metaRobotsNofollow,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteSeo?.schema?.siteUrl ?? '',
      site_name: siteSeo?.schema?.siteName ?? '',
      images: [
        {
          url: siteSeo?.openGraph?.defaultImage?.sourceUrl ?? '',
          alt: siteSeo?.openGraph?.defaultImage?.altText ?? ''
        }
      ]
    }
  }
}
