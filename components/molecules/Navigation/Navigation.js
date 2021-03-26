import isLinkActive from '@/functions/isLinkActive'
import cn from 'classnames'
import {useSession} from 'next-auth/client'
import Link from 'next/link'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import styles from './Navigation.module.css'

/**
 * Render the Navigation component.
 *
 * @author WebDevStudios
 * @param {object} props           Navigation props.
 * @param {Array}  props.menu      Array of menu items.
 * @param {string} props.className Optional classname for the element.
 * @return {Element}                The Navigation component.
 */
export default function Navigation({menu, className}) {
  const {asPath} = useRouter()
  const [session, loading] = useSession()

  const isGuest = !loading && !session?.user?.accessToken

  return (
    <>
      {!!menu?.length && (
        <nav className={cn(styles.navigation, className)}>
          <ul>
            {menu.map((item, index) => {
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
                  {children && (
                    <ul>
                      {children.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link href={item.path}>
                              <a
                                target={item.target ? item.target : '_self'}
                                className={cn(
                                  'nav-item',
                                  isLinkActive(asPath, item.path) &&
                                    styles.active
                                )}
                              >
                                {item.label}
                              </a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
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
