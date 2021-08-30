import Footer from '@/components/organisms/Footer'
import {render} from '@testing-library/react'

test('render Footer with menu, social, and siteTitle props', () => {
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
    social: {
      facebook: 'https://www.facebook.com/webdevstudios',
      instagram: 'https://instagram.com/webdevstudios',
      linkedIn: 'https://www.linkedin.com/company/webdevstudios-llc-/',
      twitter: 'https://twitter.com/webdevstudios'
    },
    siteTitle: 'Quisque ut nunc purus'
  }

  const {container} = render(<Footer {...props} />)

  const nav = container.querySelector('nav')
  expect(nav).toHaveClass('footerMenu')

  const menuItems = nav.querySelectorAll('li')

  expect(menuItems).toHaveLength(3)

  // Menu should be in order.
  expect(menuItems[0].querySelector('a')).toHaveAttribute('href', '/')
  expect(menuItems[0]).toHaveTextContent('Home')

  expect(menuItems[1].querySelector('a')).toHaveAttribute('href', '/blog')
  expect(menuItems[1]).toHaveTextContent('Blog')

  expect(menuItems[2].querySelector('a')).toHaveAttribute('href', '/about')
  expect(menuItems[2]).toHaveTextContent('About')

  // Copyright
  const copyright = container.querySelector('.copyright')
  expect(copyright).toHaveTextContent(new Date().getFullYear())
  expect(copyright).toHaveTextContent('Quisque ut nunc purus')

  // Social
  expect(
    container.querySelector('a[href="https://www.facebook.com/webdevstudios"]')
  ).toHaveTextContent('facebook')
  expect(
    container.querySelector('a[href="https://instagram.com/webdevstudios"]')
  ).toHaveTextContent('instagram')
  expect(
    container.querySelector(
      'a[href="https://www.linkedin.com/company/webdevstudios-llc-/"]'
    )
  ).toHaveTextContent('linkedIn')
  expect(
    container.querySelector('a[href="https://twitter.com/webdevstudios"]')
  ).toHaveTextContent('twitter')
})

test('render Footer with social, and siteTitle props', () => {
  const props = {
    social: {
      facebook: 'https://www.facebook.com/webdevstudios',
      instagram: 'https://instagram.com/webdevstudios',
      linkedIn: 'https://www.linkedin.com/company/webdevstudios-llc-/',
      twitter: 'https://twitter.com/webdevstudios'
    },
    siteTitle: 'Lorem Ipsum'
  }

  const {container} = render(<Footer {...props} />)

  expect(container.querySelector('nav')).toBeNull()

  // Copyright
  const copyright = container.querySelector('.copyright')
  expect(copyright).toHaveTextContent(new Date().getFullYear())
  expect(copyright).toHaveTextContent('Lorem Ipsum')

  // Social
  expect(
    container.querySelector('a[href="https://www.facebook.com/webdevstudios"]')
  ).toHaveTextContent('facebook')
  expect(
    container.querySelector('a[href="https://instagram.com/webdevstudios"]')
  ).toHaveTextContent('instagram')
  expect(
    container.querySelector(
      'a[href="https://www.linkedin.com/company/webdevstudios-llc-/"]'
    )
  ).toHaveTextContent('linkedIn')
  expect(
    container.querySelector('a[href="https://twitter.com/webdevstudios"]')
  ).toHaveTextContent('twitter')
})
