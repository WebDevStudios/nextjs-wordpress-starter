import PropTypes from 'prop-types'
import Meta from './Meta'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import config from '@/lib/config'

export default function Layout({children, ...props}) {
  return (
    <>
      <Meta title={props.title} description={props.description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  description: config.siteDescription,
  title: config.siteName
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  description: PropTypes.string,
  title: PropTypes.string
}
