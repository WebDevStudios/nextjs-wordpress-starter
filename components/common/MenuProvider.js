import PropTypes from 'prop-types'
import {createContext} from 'react'

// Initialize Menu context object.
export const MenuContext = createContext({
  menus: null
})

/**
 * Provide menus for components.
 *
 * @param  {Object} props The component attributes as props.
 * @return {Element}      The child elements wrapped in a context provider.
 */
export default function MenuProvider(props) {
  const {value, children} = props

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

MenuProvider.propTypes = {
  menus: PropTypes.string,
  children: PropTypes.object,
  value: PropTypes.object
}
