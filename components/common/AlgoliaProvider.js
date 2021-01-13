import PropTypes from 'prop-types'
import {createContext} from 'react'

// Initialize Algolia context object.
export const AlgoliaContext = createContext({
  algolia: null
})

/**
 * Render the AlgoliaProvider component.
 *
 * @author WebDevStudios
 * @param {object} props          The component attributes as props.
 * @param {any}    props.children Child component(s) to render.
 * @param {object} props.value    The Algolia index name.
 * @return {Element}              The AlgoliaProvider component.
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
  value: PropTypes.object
}
