import {useState} from 'react'
import Link from 'next/link'
import config from '@/lib/config'
import Hamburger from 'hamburger-react'

function Links() {
  return (
    <>
      {config.navigation.map((item, index) => (
        <Link href={item.href} key={index}>
          <a className="ml-8 transition-colors duration-200 ease-in-out">
            {item.label}
          </a>
        </Link>
      ))}
    </>
  )
}

function Drawer() {
  return (
    <div className="bg-white dark:bg-gray-900 absolute w-56 h-screen py-12 px-4 top-0 right-0 flex flex-col shadow-md z-50">
      <Links />
    </div>
  )
}

export default function Navigation() {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between">
      <div className="hidden md:block">
        <Links />
      </div>
      {isOpen ? <Drawer /> : null}
      <span className="md:hidden">
        <Hamburger label="Show menu" toggled={isOpen} toggle={setOpen} />
      </span>
    </nav>
  )
}
