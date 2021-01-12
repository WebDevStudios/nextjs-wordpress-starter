import Meta from '@/components/common/Meta'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import {NextSeo} from 'next-seo'
import PropTypes from 'prop-types'

/**
 * Render the Layout component.
 *
 * @author WebDevStudios
 * @param {object} props          Properties passed to the component.
 * @param {object} props.children Child component(s) to render.
 * @param {object} props.props    All remaining props.
 * @return {Element}              Element to render.
 */
export default function Layout({children, ...props}) {
  return (
    <>
      <NextSeo
        title={props?.title}
        description={props?.description}
        openGraph={props?.openGraph}
        nofollow={props?.noFollow}
        noindex={props?.noIndex}
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
  description: PropTypes.string.isRequired,
  noFollow: PropTypes.bool,
  noIndex: PropTypes.bool,
  openGraph: PropTypes.object,
  title: PropTypes.string.isRequired
}
