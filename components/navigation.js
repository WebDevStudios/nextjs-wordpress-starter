import PropTypes from 'prop-types'
import ActiveLink from '../utils/activeLink'
import {convertWPURL} from '@/lib/helpers'

export default function Navigation({menu, location}) {
  return (
    <>
      {menu && (
        <nav className={location ? `menu-${location}` : ''}>
          <ul>
            {menu.map((item, index) => {
              const children =
                item.childItems.nodes.length > 0 ? item.childItems.nodes : ''
              return (
                <li key={index}>
                  <ActiveLink
                    href={convertWPURL(item.url)}
                    activeClassName="active"
                  >
                    <a target={item.target ? item.target : '_self'}>
                      {item.label}
                    </a>
                  </ActiveLink>
                  {children && (
                    <ul aria-hidden="true">
                      {children.map((item, index) => {
                        return (
                          <li key={index}>
                            <ActiveLink
                              href={convertWPURL(item.url)}
                              activeClassName="active"
                            >
                              <a target={item.target ? item.target : '_self'}>
                                {item.label}
                              </a>
                            </ActiveLink>
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
  menu: PropTypes.array,
  location: PropTypes.string
}
