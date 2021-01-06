import Meta from '@/components/common/Meta'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import PropTypes from 'prop-types'

export default function Layout({children}) {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired
}
