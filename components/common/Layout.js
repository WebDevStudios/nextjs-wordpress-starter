import Meta from '@/components/common/Meta'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import {NextSeo, BlogJsonLd} from 'next-seo'
import PropTypes from 'prop-types'
import {seoPropTypes} from '@/functions/getPagePropTypes'

/**
 * Render the Layout component.
 *
 * @author WebDevStudios
 * @param {object}  props           The component attributes as props.
 * @param {any}     props.children  Child component(s) to render.
 * @param {object}  props.seo       Yoast SEO data from WordPress.
 * @param {boolean} props.hasJsonLd Whether to render BlogJsonLd component.
 * @return {Element}                The Layout component.
 */
export default function Layout({children, seo, hasJsonLd}) {
  // Define SEO image prop.
  const seoImages = [
    {
      url: seo?.opengraphImage?.sourceUrl,
      alt: seo?.opengraphImage?.altText
    }
  ]

  return (
    <>
      <NextSeo
        title={seo?.title}
        description={seo?.metaDesc}
        openGraph={{
          title: seo?.title,
          description: seo?.metaDesc,
          images: [...seoImages]
        }}
        nofollow={seo?.metaRobotsNofollow}
        noindex={seo?.metaRobotsNofollow}
      />
      {!!hasJsonLd && (
        <BlogJsonLd
          url={seo?.canonical}
          title={seo?.title}
          images={[...seoImages]}
          datePublished={seo?.opengraphPublishedTime}
          dateModified={seo?.opengraphModifiedTime}
          authorName={seo?.opengraphAuthor}
          description={seo?.metaDesc}
        />
      )}
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  hasJsonLd: PropTypes.bool,
  ...seoPropTypes
}
