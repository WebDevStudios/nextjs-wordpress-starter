import Meta from '@/components/common/Meta'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import {NextSeo} from 'next-seo'
import PropTypes from 'prop-types'
import {seoPropTypes} from '@/functions/getPagePropTypes'

/**
 * Render the Layout component.
 *
 * @author WebDevStudios
 * @param {object} props          The component attributes as props.
 * @param {any}    props.children Child component(s) to render.
 * @param {object} props.seo      Yoast SEO data from WordPress.
 * @return {Element}              The Layout component.
 */
export default function Layout({children, seo}) {
  return (
    <>
      <NextSeo
        title={seo?.title}
        description={seo?.metaDesc}
        openGraph={{
          title: seo?.title,
          description: seo?.metaDesc,
          images: [
            {
              url: seo?.opengraphImage?.sourceUrl,
              alt: seo?.opengraphImage?.altText
            }
          ]
        }}
        nofollow={seo?.metaRobotsNofollow}
        noindex={seo?.metaRobotsNofollow}
      />
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  ...seoPropTypes
}
