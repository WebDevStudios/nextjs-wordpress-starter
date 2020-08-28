import PropTypes from 'prop-types'
import Alert from '@/components/alert'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Meta from '@/components/meta'

export default function Layout({preview, menus, children}) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <Header menus={menus} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer menus={menus} />
    </>
  )
}

Layout.propTypes = {
  preview: PropTypes.bool,
  menus: PropTypes.object,
  children: PropTypes.any.isRequired
}
