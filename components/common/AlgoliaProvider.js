import PropTypes from 'prop-types'
import {createContext} from 'react'

// Initialize Algolia context object.
export const AlgoliaContext = createContext({
  algolia: null
})

/**
 * Provide indexName env var.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 * @return {Element}     The child elements wrapped in a context provider.
 */
export default function AlgoliaProvider(props) {
  return (
    <AlgoliaContext.Provider value={props?.value}>
      {props?.children}
    </AlgoliaContext.Provider>
  )
}

AlgoliaProvider.propTypes = {
  children: PropTypes.object,
  indexName: PropTypes.string,
  value: PropTypes.object
}
