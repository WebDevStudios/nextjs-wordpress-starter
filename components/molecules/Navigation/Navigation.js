import isLinkActive from '@/functions/isLinkActive'
import cn from 'classnames'
import {useSession} from 'next-auth/client'
import Link from 'next/link'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import styles from './Navigation.module.css'

/**
 * Render the NavigationMenu component.
 *
 * Recursively displays a menu and its children.
 *
 * @author WebDevStudios
 * @param  {object}  props      NavigationMenu props.
 * @param  {Array}   props.menu Array of menu items.
 * @return {Element}            The NavigationMenu component.
 */
function NavigationMenu({menu}) {
  const {asPath} = useRouter()
  const [session, loading] = useSession()
  const isGuest = !loading && !session?.user?.accessToken

  if (!menu || !menu?.length) {
    return null
  }

  return (
    <>
      {!!menu & !!menu?.length &&
        menu.map((item, index) => {
          // Check for session-specific menu items.
          if ((loading || isGuest) && item.path === '/profile') {
            return
          } else if ((loading || !isGuest) && item.path === '/login') {
            return
          }

          const children =
            item.children && item.children.length > 0 ? item.children : ''

          return (
            <li key={index}>
              <Link href={item.path}>
                <a
                  target={item.target ? item.target : '_self'}
                  className={cn(
                    'nav-item',
                    isLinkActive(asPath, item.path) && styles.active
                  )}
                >
                  {item.label}
                </a>
              </Link>
              {!!children && !!children.length && (
                <ul>
                  <NavigationMenu menu={children} />
                </ul>
              )}
            </li>
          )
        })}
    </>
  )
}

NavigationMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object)
}

/**
 * Render the Navigation component.
 *
 * @author WebDevStudios
 * @param  {object}  props           Navigation props.
 * @param  {Array}   props.menu      Array of menu items.
 * @param  {string}  props.className Optional classname for the element.
 * @return {Element}                 The Navigation component.
 */
export default function Navigation({menu, className}) {
  return (
    <>
      {!!menu?.length && (
        <nav className={cn(styles.navigation, className)}>
          <ul>
            <NavigationMenu menu={menu} />
          </ul>
        </nav>
      )}
    </>
  )
}

Navigation.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.object)
}
