import Quote from '@/components/atoms/Quote'
import {render} from '@testing-library/react'

test('render Quote with className, id, style and value props', () => {
  const props = {
    className: 'ctm-cls-q',
    id: 'ctm-id-q',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed molestie lorem.'
  }

  const {container} = render(<Quote {...props} />)

  expect(container.firstElementChild).toHaveClass('ctm-cls-q')
  expect(container.firstElementChild).toHaveAttribute('id', 'ctm-id-q')
  expect(container).toHaveTextContent(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed molestie lorem.'
  )
})

test('render Quote with citation and value props', () => {
  const props = {
    citation: 'Lorem',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }

  const {container} = render(<Quote {...props} />)

  expect(container).toHaveTextContent(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  )
  expect(container.querySelector('.cite')).toHaveTextContent('Lorem')
})
