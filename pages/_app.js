import PropTypes from 'prop-types'
import '@/styles/index.css'
import {ApolloProvider} from '@apollo/client'
import Error from 'next/error'
import {useApollo} from '@/api/apolloConfig'

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

  return (
    <ApolloProvider client={apolloClient}>
      {error ? (
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
