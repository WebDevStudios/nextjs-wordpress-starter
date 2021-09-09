import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import {render} from '@testing-library/react'

test('render Breadcrumbs', () => {
  const props = {
    breadcrumbs: [
      {
        text: 'Home',
        url: 'http://localhost:3000/'
      },
      {
        text: 'Blog',
        url: 'http://localhost:3000/blog'
      },
      {
        text: 'Lorem Ipsum',
        url: 'http://localhost:3000/blog/lorem-ipsum'
      }
    ]
  }

  const {container} = render(<Breadcrumbs {...props} />)

  expect(container.firstElementChild).toHaveClass('breadcrumbs')

  const lists = container.firstElementChild.querySelectorAll('li')

  expect(lists).toHaveLength(3)

  // Breadcrumbs should be in order
  // Home -> Blog -> Lorem Ipsum

  expect(lists[0].querySelector('a')).toHaveAttribute(
    'href',
    'http://localhost:3000/'
  )
  expect(lists[0]).toHaveTextContent('Home')

  expect(lists[1].querySelector('a')).toHaveAttribute(
    'href',
    'http://localhost:3000/blog'
  )
  expect(lists[1]).toHaveTextContent('Blog')

  expect(lists[2].querySelector('a')).toHaveAttribute(
    'href',
    'http://localhost:3000/blog/lorem-ipsum'
  )
  expect(lists[2]).toHaveTextContent('Lorem Ipsum')
})
