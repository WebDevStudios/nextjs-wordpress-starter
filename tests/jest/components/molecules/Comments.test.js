import {SingleComment} from '@/components/molecules/Comments'
import {render} from '@testing-library/react'

jest.mock('@/functions/next-api/wordpress/comments/processPostComment', () =>
  jest.fn()
)

jest.mock('next-auth/client')

test('render SingleComment with comment without author url props', () => {
  const props = {
    comment: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Aug. 25, 2021',
      author: {
        node: {
          name: 'John Doe'
        }
      }
    }
  }

  const {container} = render(<SingleComment {...props} />)

  expect(container.querySelector('h4')).toHaveTextContent('John Doe')
  expect(container.querySelector('h4')).toHaveTextContent('Aug. 25, 2021')
  expect(container).toHaveTextContent(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  )
})

test('render SingleComment with comment with author url props', () => {
  const props = {
    comment: {
      content:
        'Praesent sem lorem, interdum sit amet congue sit amet, faucibus eget dui.',
      date: 'June. 18, 2021',
      author: {
        node: {
          name: 'Jane',
          url: 'https://example.com'
        }
      }
    }
  }

  const {container} = render(<SingleComment {...props} />)

  const author = container.querySelector('h4').querySelector('a')

  expect(author).toHaveAttribute('href', 'https://example.com')
  expect(author).toHaveTextContent('Jane')

  expect(container.querySelector('h4')).toHaveTextContent('June. 18, 2021')
  expect(container).toHaveTextContent(
    'Praesent sem lorem, interdum sit amet congue sit amet, faucibus eget dui.'
  )
})
