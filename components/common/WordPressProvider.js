import PropTypes from 'prop-types'
import {createContext, useContext} from 'react'

// Initialize Menu context object.
export const WPContext = createContext()

/**
 * Export useContext Hook.
 *
 * @return {Function} WordPress Context
 */
export function useWordPressContext() {
  return useContext(WPContext)
}

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
