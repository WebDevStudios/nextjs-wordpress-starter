import Meta from '@/components/molecules/Meta'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import PropTypes from 'prop-types'

/**
 * Render the Layout component.
 *
 * @author WebDevStudios
 * @param  {object}  props           The component attributes as props.
 * @param  {any}     props.children  Child component(s) to render.
 * @param  {object}  props.menus     WP menus arranged by location.
 * @return {Element}                 The Layout component.
 */
export default function Layout({children, menus}) {
  return (
    <>
      <Meta />
      <Header menu={menus?.primary_menu} />
      <main id="page-content">{children}</main>
      <Footer menu={menus?.footer_menu} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  menus: PropTypes.object
}
