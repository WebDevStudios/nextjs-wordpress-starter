import PropTypes from 'prop-types'
import {getPrimaryMenu, getMobileMenu} from '@/lib/api'
import '@/styles/index.css'
import '@/styles/header.css'
import '@/styles/footer.css'

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
