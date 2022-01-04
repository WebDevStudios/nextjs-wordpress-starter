import Meta from '@/components/common/Meta'
import {useWordPressContext} from '@/components/common/WordPressProvider'
import AlgoliaSearch from '@/components/molecules/AlgoliaSearch'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import {seoPropTypes} from '@/functions/getPagePropTypes'
import {BlogJsonLd, NextSeo} from 'next-seo'
import PropTypes from 'prop-types'

/**
 * Render the Layout component.
 *
 * @author WebDevStudios
 * @param  {object}  props          The component attributes as props.
 * @param  {any}     props.children Child component(s) to render.
 * @param  {object}  props.seo      Yoast SEO data from WordPress.
 * @return {Element}                The Layout component.
 */
export default function Layout({children, seo}) {
  const {menus} = useWordPressContext()

  return (
    <>
      <Meta seo={seo} />
      <Header
        menu={menus?.primary_menu}
        search={<AlgoliaSearch useHistory={true} usePlaceholder={true} />}
      />
      <main id="page-content">{children}</main>
      <Footer
        social={seo?.social}
        siteTitle={seo?.siteTitle}
        menu={menus?.footer_menu}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  ...seoPropTypes
}
