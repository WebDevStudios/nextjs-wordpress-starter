import Link from 'next/link'
import Navigation from '@/components/navigation'

export default function Header({menu}) {
  const menuItems = menu ? menu.edges[0].node.menuItems.nodes : false
  return (
    <header>
      <h2 className="text-5xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5 mt-10">
        <Link href="/">
          <a className="hover:underline">Blog</a>
        </Link>
        .
      </h2>
      {menu && <Navigation menu={menuItems} location="main" />}
    </header>
  )
}
