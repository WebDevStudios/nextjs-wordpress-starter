import queryError404Page from '@/lib/wordpress/pages/queryError404Page'
import processPostTypeQuery from './processPostTypeQuery'

// Define single page query based on page name.
export const customPageQuerySeo = {
  404: {
    query: queryError404Page,
    title: '404 Not Found',
    description: ''
  }
}

/**
 * Retrieve single page set via Additional Settings.
 *
 * @author WebDevStudios
 * @param {string} page Custom page name in settings.
 * @return {object}     Object containing Apollo client instance and post data or error object.
 */
export default async function getSettingsCustomPage(page) {
  // Retrieve page query.
  const query = customPageQuerySeo?.[page]?.query ?? null

  const data = await processPostTypeQuery('page', page, query)

  // Add custom SEO if missing.
  if (!data?.post?.seo) {
    data.post = {
      ...data?.post,
      seo: {
        title: `${customPageQuerySeo[page]?.title ?? ''} - ${
          data.defaultSeo?.openGraph?.siteName ?? ''
        }`,
        description: customPageQuerySeo[page]?.description ?? '',
        canonical: `${data.defaultSeo?.openGraph?.url ?? ''}/${page}`
      }
    }
  }

  return data
}
