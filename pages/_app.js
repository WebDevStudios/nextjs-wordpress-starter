import {useApollo} from '@/api/apolloConfig'
import '@/styles/index.css'
import {ApolloProvider} from '@apollo/client'
import {DefaultSeo} from 'next-seo'
import Error from 'next/error'
import {useState} from 'react'
import PropTypes from 'prop-types'
import AlgoliaProvider from '@/components/common/AlgoliaProvider'

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

  // Check for errors.
  const error = pageProps?.error
  let errorMessage = pageProps?.errorMessage ?? 'An unknown error occurred.'
  // Trim trailing period - added via Error component.
  errorMessage = errorMessage.replace(/\.$/g, '')

  // Initialize Algolia state for context provider.
  const [algolia] = useState({
    indexName: pageProps?.algolia?.indexName
  })

  // Extract default SEO props from page props.
  const {
    defaultSeo: {social, ...defaultSeoData},
    ...passThruProps
  } = pageProps

  const componentProps = {
    ...passThruProps,
    post: {
      ...passThruProps?.post,
      seo: {
        ...passThruProps?.post?.seo,
        social
      }
    }
  }

  return (
    <ApolloProvider client={apolloClient}>
      <AlgoliaProvider value={algolia}>
        {error ? (
          <Error statusCode={500} title={errorMessage} />
        ) : (
          <>
            {!!defaultSeoData && <DefaultSeo {...defaultSeoData} />}
            <Component {...componentProps} />
          </>
        )}
      </AlgoliaProvider>
    </ApolloProvider>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
