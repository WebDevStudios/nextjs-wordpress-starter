import {useApollo} from '@/api/apolloConfig'
import '@/styles/index.css'
import {ApolloProvider} from '@apollo/client'
import {DefaultSeo} from 'next-seo'
import Error from 'next/error'
import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import AlgoliaProvider from '@/components/common/AlgoliaProvider'
import MenuProvider from '@/components/common/MenuProvider'
import {useRouter} from 'next/router'

/**
 * Render the App component.
 *
 * @author WebDevStudios
 * @param {object}  props           The component attributes as props.
 * @param {object}  props.Component Page component to display.
 * @param {boolean} props.pageProps Page component props.
 * @return {Element}                The App component.
 */
export default function App({Component, pageProps}) {
  /**
   * Wrap the app in the ApolloProvider component.
   *
   * @see https://www.apollographql.com/docs/react/api/react/hooks/#the-apolloprovider-component
   */
  const apolloClient = useApollo(pageProps)

  const router = useRouter()

  // Redirect from WP blog archive to FE posts archive.
  useEffect(() => {
    if (!pageProps?.post?.isPostsPage) {
      return
    }

    router.push('/blog')
  }, [pageProps, router])

  // Check for errors.
  const error = pageProps?.error
  let errorMessage = pageProps?.errorMessage ?? 'An unknown error occurred.'
  // Trim trailing period - added via Error component.
  errorMessage = errorMessage.replace(/\.$/g, '')

  // Initialize Algolia state for context provider.
  const [algolia] = useState({
    indexName: pageProps?.algolia?.indexName
  })

  // Initialize state for Menu context provider.
  const [navMenus] = useState({
    menus: pageProps?.menus
  })

  return (
    <ApolloProvider client={apolloClient}>
      <AlgoliaProvider value={algolia}>
        <MenuProvider value={navMenus}>
          {error ? (
            <Error statusCode={500} title={errorMessage} />
          ) : (
            <>
              <DefaultSeo
                title="Query from Yoast SEO"
                description="Query from Yoast SEO"
                noIndex={false} // query from yoast seo
                noFollow={false} // query from yoast seo
                openGraph={{
                  type: 'website',
                  locale: 'en_US',
                  url: 'Query from Yoast SEO',
                  site_name: '',
                  images: [
                    {
                      url: 'Query from Yoast SEO',
                      width: 'Query from Yoast SEO',
                      height: 'Query from Yoast SEO',
                      alt: 'Query from Yoast SEO'
                    }
                  ]
                }}
              />
              <Component {...pageProps} />
            </>
          )}
        </MenuProvider>
      </AlgoliaProvider>
    </ApolloProvider>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
