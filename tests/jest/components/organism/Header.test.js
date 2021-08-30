import Header from '@/components/organisms/Header'
import {render} from '@testing-library/react'
import {useSession} from 'next-auth/client'
import {useRouter} from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

jest.mock('next-auth/client', () => ({
  useSession: jest.fn()
}))

test('render Header with menu, and search props', () => {
  useRouter.mockImplementation(() => ({
    asPath: '/'
  }))
  useSession.mockImplementation(() => [null, false])

  const props = {
    menu: [
      {
        label: 'Home',
        path: '/',
        target: null
      },
      {
        label: 'Blog',
        path: '/blog',
        target: null
      },
      {
        label: 'About',
        path: '/about/',
        target: null
      }
    ],
    search: <input type="text" />
  }

  const {container} = render(<Header {...props} />)

  expect(container.querySelector('a[href="#page-content"]')).toHaveTextContent(
    'Skip to Main Content'
  )
  expect(container.querySelector('.search').innerHTML).toBe(
    '<input type="text">'
  )

  const primaryMenu = container.querySelector('.primaryMenu')
  expect(primaryMenu).not.toBeNull()

  const menuItems = primaryMenu.querySelectorAll('li')
  expect(menuItems[0].querySelector('a')).toHaveAttribute('href', '/')
  expect(menuItems[0]).toHaveTextContent('Home')

  expect(menuItems[1].querySelector('a')).toHaveAttribute('href', '/blog')
  expect(menuItems[1]).toHaveTextContent('Blog')

  expect(menuItems[2].querySelector('a')).toHaveAttribute('href', '/about')
  expect(menuItems[2]).toHaveTextContent('About')
})
