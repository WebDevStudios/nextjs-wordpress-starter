import ActiveLink from '../utils/activeLink'
import {convertWPURL} from '@/lib/helpers'

export default function Navigation({menu, location}) {
  return (
    <>
      {menu && (
        <nav className={location ? `menu-${location}` : ''}>
          <ul className="flex flex-row flex-no-wrap mb-8">
            {menu.map((item, index) => {
              const children =
                item.childItems.nodes.length > 0 ? item.childItems.nodes : ''
              return (
                <li key={index} className="text-lg mr-4">
                  <ActiveLink
                    href={convertWPURL(item.url)}
                    activeClassName="active"
                  >
                    <a
                      className="pt-2 pb-2 mr-2 leading-12 hover:underline"
                      target={item.target ? item.target : '_self'}
                    >
                      {item.label}
                    </a>
                  </ActiveLink>
                  {children && (
                    <ul style={{display: 'none'}} aria-expanded="false">
                      {children.map((item, index) => {
                        return (
                          <li key={index} className="text-base">
                            <ActiveLink
                              href={convertWPURL(item.url)}
                              activeClassName="active"
                            >
                              <a
                                className="pt-2 pb-2 leading-12 hover:underline"
                                target={item.target ? item.target : '_self'}
                              >
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
