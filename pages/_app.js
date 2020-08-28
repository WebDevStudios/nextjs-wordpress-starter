import PropTypes from 'prop-types'
import {getPrimaryMenu, getMobileMenu} from '@/lib/api'
import '@/styles/index.css'
import '@/styles/header.css'
import '@/styles/footer.css'

export default function App({Component, pageProps, menus}) {
  return (
    <Component
      {...pageProps}
      primaryMenu={menus.primary}
      mobileMenu={menus.mobile}
    />
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
  menus: PropTypes.object
}

/**
 * NextJS recommends against using getInitialProps
 *
 * @link https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
 * @link https://github.com/vercel/next.js/discussions/11183#discussioncomment-26430
 * @param {*} param
 */
App.getInitialProps = async ({Component, ctx}) => {
  const primaryMenu = ''
  const mobileMenu = ''
  const menus = {
    primary: primaryMenu,
    mobile: mobileMenu
  }
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return {pageProps, menus}
}
