import PropTypes from 'prop-types'
import '@/styles/index.css'
import {ApolloProvider} from '@apollo/client'
import {useApollo} from '@/api/wordpress/connector'
import Error from 'next/error'

export default function App({Component, pageProps}) {
  /**
   * Wrap the app in the ApolloProvider component.
   *
   * @see https://www.apollographql.com/docs/react/api/react/hooks/#the-apolloprovider-component
   */
  const apolloClient = useApollo(pageProps)

  // Check for errors.
  const isError = pageProps?.post?.isError
  let errorMessage = pageProps?.post?.message ?? 'An unknown error occurred.'
  // Trim trailing period - added via Error component.
  errorMessage = errorMessage.replace(/\.$/g, '')

  return (
    <ApolloProvider client={apolloClient}>
      {isError ? (
        <Error statusCode={500} title={errorMessage} />
      ) : (
        <Component {...pageProps} />
      )}
    </ApolloProvider>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
