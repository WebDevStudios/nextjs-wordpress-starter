import PropTypes from 'prop-types'
import Link from 'next/link'
import Container from './container'
import Navigation from '@/components/navigation'
import {getMenuBySlug} from '../lib/helpers'

export default function Header({menus}) {
  const menu = menus?.primary
  return (
    <Container>
      <header className="site-header">
        <div className="site-header--logo">
          <Link href="/">
            <a>Blog</a>
          </Link>
          .
        </div>
        {menu && <Navigation menu={menu} location="main" />}
      </header>
    </Container>
  )
}

Header.propTypes = {
  menus: PropTypes.object
}
