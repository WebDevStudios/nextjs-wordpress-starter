import PropTypes from 'prop-types'
import {createContext} from 'react'

// Initialize Menu context object.
export const WPContext = createContext()

/**
 * Provide WordPress Context for components.
 *
 * @param {object} props The component attributes as props.
 * @return {Element}      The child elements wrapped in a context provider.
 */
export default function WordPressProvider(props) {
  const {value, children} = props

  return <WPContext.Provider value={value}>{children}</WPContext.Provider>
}

WordPressProvider.propTypes = {
  children: PropTypes.object,
  value: PropTypes.object
}
