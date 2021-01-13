import ActiveLink from './ActiveLink'

/**
 * @param props
 */
export default function Navigation({menu, className}) {
  console.log(menu)
  return (
    <>
      {!!menu?.length && (
        <nav className={className}>
          <ul>
            {menu.map((item, index) => {
              const children =
                item.children && item.children.length > 0 ? item.children : ''
              return (
                <li key={index}>
                  <ActiveLink href={item.path} activeClassName="active">
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
                              href={item.path}
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
