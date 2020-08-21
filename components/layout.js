import PropTypes from 'prop-types'
import Alert from '@/components/alert'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Meta from '@/components/meta'
import {getPrimaryMenu} from '@/lib/api'

export default function Layout({preview, menu, children}) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <Header menu={menu} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer menu={menu} />
    </>
  )
}

Layout.propTypes = {
  preview: PropTypes.bool,
  children: PropTypes.any.isRequired
}
