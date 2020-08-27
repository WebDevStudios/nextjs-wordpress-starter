import PropTypes from 'prop-types'
import Link from 'next/link'
import Container from './container'
import Navigation from '@/components/navigation'

export default function Header({menu}) {
  const menuItems =
    menu && menu.edges && menu.edges[0]
      ? menu.edges[0].node.menuItems.nodes
      : false
  return (
    <Container>
      <header className="site-header">
        <div className="site-header--logo">
          <Link href="/">
            <a>Blog</a>
          </Link>
          .
        </div>
        {menu && <Navigation menu={menuItems} location="main" />}
      </header>
    </Container>
  )
}

Header.propTypes = {
  menu: PropTypes.object
}
