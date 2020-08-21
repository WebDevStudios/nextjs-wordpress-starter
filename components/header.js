import Link from 'next/link'
import Container from './container'
import Navigation from '@/components/navigation'
import cn from 'classnames'

export default function Header({menu}) {
  const menuItems = menu ? menu.edges[0].node.menuItems.nodes : false
  return (
    <Container>
      <header className="border-b border-accent-3 pb-10 mb-10 mt-10">
        <h2 className="text-5xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5">
          <Link href="/">
            <a className="hover:underline">Blog</a>
          </Link>
          .
        </h2>
        {menu && <Navigation menu={menuItems} location="main" />}
      </header>
    </Container>
  )
}
