import PullQuote from '@/components/atoms/PullQuote'
import {render} from '@testing-library/react'

test('render PullQuote with className, id, style and value props', () => {
  const props = {
    className: 'ctm-cls-pq',
    id: 'ctm-id-pq',
    style: {
      backgroundColor: 'green'
    },
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed molestie lorem. '
  }

  const {container} = render(<PullQuote {...props} />)

  expect(container.firstElementChild).toHaveClass('ctm-cls-pq')
  expect(container.firstElementChild).not.toHaveClass('styleSolid')
  expect(container.firstElementChild).toHaveAttribute('id', 'ctm-id-pq')
  expect(container.firstElementChild).toHaveStyle({
    backgroundColor: 'green'
  })
  expect(container).toHaveTextContent(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed molestie lorem.'
  )
})

test('render PullQuote with citation, styleSolid, and value props', () => {
  const props = {
    citation: 'Lorem ipsum',
    styleSolid: true,
    value:
      'Nullam diam massa, vulputate eu augue pellentesque, efficitur pellentesque ante.'
  }

  const {container} = render(<PullQuote {...props} />)

  expect(container.firstElementChild).toHaveClass('styleSolid')
  expect(container.querySelector('blockquote')).toHaveTextContent(
    'Nullam diam massa, vulputate eu augue pellentesque, efficitur pellentesque ante.'
  )
  expect(container.querySelector('.cite')).toHaveTextContent('Lorem ipsum')
})
