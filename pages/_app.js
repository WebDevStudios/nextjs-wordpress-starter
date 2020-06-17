import PropTypes from 'prop-types'
import '@/styles/index.css'

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
