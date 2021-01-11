import PropTypes from 'prop-types'
import {createContext} from 'react'

// Initialize Algolia context object.
export const AlgoliaContext = createContext({
  algolia: null
})

/**
 * Provide indexName env var.
 *
 * @param  {Object} props The component attributes as props.
 * @return {Element}      The child elements wrapped in a context provider.
 */
export default function AlgoliaProvider(props) {
  const {value, children} = props

  return (
    <AlgoliaContext.Provider value={value}>{children}</AlgoliaContext.Provider>
  )
}

AlgoliaProvider.propTypes = {
  indexName: PropTypes.string,
  children: PropTypes.object
}
