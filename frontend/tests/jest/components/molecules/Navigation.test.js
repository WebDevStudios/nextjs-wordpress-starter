import Navigation from '@/components/molecules/Navigation'
import {render} from '@testing-library/react'
import {useSession} from 'next-auth/client'
import {useRouter} from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

jest.mock('next-auth/client', () => ({
  useSession: jest.fn()
}))

const mockMenuObject = [
  {
    __typename: 'MenuItem',
    id: 'cG9zdXXxxXc=',
    parentId: null,
    label: 'Home',
    path: '/home/',
    target: null,
    title: null,
    children: []
  },
  {
    __typename: 'MenuItem',
    id: 'cG9zdDoyMTc=',
    parentId: null,
    label: 'Contact',
    path: '/contact/',
    target: null,
    title: null,
    children: []
  },
  {
    __typename: 'MenuItem',
    id: 'cG9zdDo0MDA=',
    parentId: null,
    label: 'Log In',
    path: '/login',
    target: null,
    title: null,
    children: []
  },
  {
    __typename: 'MenuItem',
    id: 'cG9zdDo0MDE=',
    parentId: null,
    label: 'Profile',
    path: '/profile',
    target: null,
    title: null,
    children: []
  }
]

test('Navigation menu for guests should not have Profile', () => {
  useRouter.mockImplementation(() => ({
    asPath: '/'
  }))
  useSession.mockImplementation(() => [null, false])
  const {getAllByRole} = render(<Navigation menu={mockMenuObject} />)
  const menuItems = getAllByRole('link')

  // It should only have 3 items.
  // "Profile" link shouldn't be rendered for guests.
  expect(menuItems.length).toBe(3)

  // Get the links of the menus
  const menuLinks = []
  menuItems.forEach(function (el) {
    menuLinks.push(el.href)
  })

  // Test the href of the links
  expect(menuLinks.indexOf('http://localhost/home')).toBeGreaterThanOrEqual(0)
  expect(menuLinks.indexOf('http://localhost/contact')).toBeGreaterThanOrEqual(
    0
  )
  expect(menuLinks.indexOf('http://localhost/login')).toBeGreaterThanOrEqual(0)

  // Make sure /profile/ isn't included
  expect(menuLinks.indexOf('http://localhost/profile')).toBe(-1)
})

test('Navigation menu for logged user should show profile and not login', () => {
  const mockedUser = {
    user: {
      accessToken: 'ACCESS_TOKEN'
    }
  }

  useRouter.mockImplementation(() => ({
    asPath: '/'
  }))
  useSession.mockImplementation(() => [mockedUser, false])

  const {getAllByRole} = render(<Navigation menu={mockMenuObject} />)
  const menuItems = getAllByRole('link')

  // It should only have 3 items.
  // "Profile" link shouldn't be rendered for guests.
  expect(menuItems.length).toBe(3)

  // Get the links of the menus
  const menuLinks = []
  menuItems.forEach(function (el) {
    menuLinks.push(el.href)
  })

  // Test the href of the links
  expect(menuLinks.indexOf('http://localhost/home')).toBeGreaterThanOrEqual(0)
  expect(menuLinks.indexOf('http://localhost/contact')).toBeGreaterThanOrEqual(
    0
  )
  expect(menuLinks.indexOf('http://localhost/profile')).toBeGreaterThanOrEqual(
    0
  )

  // Make sure /login/ isn't included
  expect(menuLinks.indexOf('http://localhost/login')).toBe(-1)
})
