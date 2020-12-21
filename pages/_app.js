import PropTypes from 'prop-types'
import '@/styles/index.css'

const App = ({Component, pageProps}) => <Component {...pageProps} />

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
