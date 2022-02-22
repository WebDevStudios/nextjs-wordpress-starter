import processPostTypeQuery from '@/functions/wordpress/postTypes/processPostTypeQuery'
import headlessConfigPageQuerySeo from '@/lib/wordpress/_config/headlessConfigPageQuerySeo'

/**
 * Retrieve single page set via Headless Config.
 *
 * @author WebDevStudios
 * @param  {string} page Custom page name in config.
 * @return {object}      Object containing Apollo client instance and post data or error object.
 */
export default async function getHeadlessConfigPage(page) {
  // Retrieve page config.
  const config = headlessConfigPageQuerySeo?.[page]
  const query = config?.query ?? null
  const type = config?.type || 'page'

  const data = await processPostTypeQuery(type, page, query)

  // Add custom SEO if missing.
  if (!data?.post?.seo) {
    data.post = {
      ...data?.post,
      seo: {
        title: `${headlessConfigPageQuerySeo[page]?.title ?? ''} - ${
          data.defaultSeo?.openGraph?.siteName ?? ''
        }`
      }
    }
  }

  return data
}
