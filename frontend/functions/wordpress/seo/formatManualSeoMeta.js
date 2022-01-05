/**
 * Create manual SEO meta tags as replacement for `fullHead` on frontend-only and/or certain archive routes.
 *
 * @author WebDevStudios
 * @param  {string} title Route title.
 * @param  {string} path  Route path.
 * @param  {object} seo   Site SEO data.
 * @return {object}       Object containing `fullHead` meta string and title.
 */
export default function formatManualSeoMeta(title, path, seo) {
  const siteTitle = seo?.siteSeo?.schema?.siteName || ''
  const siteLogo = seo?.siteSeo?.openGraph?.defaultImage?.sourceUrl || ''
  const fullTitle = `${title} - ${siteTitle}`
  const domain = seo?.siteSeo?.schema?.siteUrl || ''

  // Create array of social links.
  const social = []
  if (seo?.siteSeo?.social) {
    for (const [site, data] of Object.entries(seo.siteSeo.social)) {
      if (site === 'twitter' && data?.username) {
        social.push(`https://twitter.com/${data.username}`)
      }

      if (!data?.url) {
        continue
      }

      social.push(data.url)
    }
  }

  return {
    fullHead: `
      <meta name='robots' content='noindex, follow' />
      <title>${fullTitle}</title>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="${fullTitle}" />
      <meta property="og:url" content="${domain}/${path}" />
      <meta property="og:site_name" content="${siteTitle}" />
      ${
        seo?.siteSeo?.social?.twitter?.username &&
        `<meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${fullTitle}" />
        <meta name="twitter:site" content="@${seo.siteSeo.social.twitter.username}" />`
      }
      <script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"${domain}/#organization","name":"${siteTitle}","url":"${domain}/","sameAs":[${social.join(
      ', '
    )}],"logo":{"@type":"ImageObject","@id":"${domain}/#logo","inLanguage":"en-US","url":"${siteLogo}","contentUrl":"${siteLogo}","width":173,"height":60,"caption":"${siteTitle}"},"image":{"@id":"${domain}/#logo"}},{"@type":"WebSite","@id":"${domain}/#website","url":"${domain}/","name":"${siteTitle}","description":"${
      seo?.generalSettings?.description || ''
    }","publisher":{"@id":"${domain}/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"${domain}/search?q={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":["CollectionPage"${
      path === 'search' && ',"SearchResultsPage"'
    }],"@id":"#webpage","url":"${domain}/${path}","name":"${fullTitle}","isPartOf":{"@id":"${domain}/#website"},"breadcrumb":{"@id":"#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["${domain}/${path}"]}]},{"@type":"BreadcrumbList","@id":"#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${domain}/"},{"@type":"ListItem","position":2,"name":"${title}"}]}]}</script>
    `,
    title: fullTitle
  }
}
