import Separator from '@/components/atoms/Separator'
import {render} from '@testing-library/react'

test('render Separator with anchor, and className props', () => {
  const props = {
    anchor: 'test-anchor',
    className: 'test-cls'
  }

  const {container, debug} = render(<Separator {...props} />)

  debug()

  expect(container.firstElementChild).toHaveClass('test-cls')
  expect(container.firstElementChild).toHaveAttribute('id', 'test-anchor')
})
