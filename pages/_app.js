import PropTypes from 'prop-types'
import {getPrimaryMenu, getMobileMenu} from '@/lib/api'
import '@/styles/index.css'

export default function App({Component, pageProps, primaryMenu, mobileMenu}) {
  return (
    <Component
      {...pageProps}
      primaryMenu={primaryMenu}
      mobileMenu={mobileMenu}
    />
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
  primaryMenu: PropTypes.object,
  mobileMenu: PropTypes.object
}

/**
 * getInitialProps may be depreacted in Next 9.3
 *
 * @link https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
 * @link https://github.com/vercel/next.js/discussions/11183#discussioncomment-26430
 * @param {*} param
 */
App.getInitialProps = async ({Component, ctx}) => {
  const primaryMenu = await getPrimaryMenu()
  const mobileMenu = await getMobileMenu()
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return {pageProps, primaryMenu, mobileMenu}
}
