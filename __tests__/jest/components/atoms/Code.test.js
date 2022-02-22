import Code from '@/components/atoms/Code'
import {render} from '@testing-library/react'

test('render Code with id, className, content, and style props', () => {
  const props = {
    id: 'test-code-id',
    className: 'test-class-code',
    content: '<p>this is a code block!</p>',
    style: {
      backgroundColor: 'blue'
    }
  }

  const {container} = render(<Code {...props} />)

  const parentDiv = container.querySelector('#test-code-id')

  expect(parentDiv).not.toBeNull()
  expect(parentDiv).toHaveStyle({
    backgroundColor: 'blue'
  })

  const codeDiv = container.querySelector('code')
  expect(codeDiv).toHaveClass('language-test-class-code')
  expect(codeDiv).toHaveTextContent('<p>this is a code block!</p>')
})
