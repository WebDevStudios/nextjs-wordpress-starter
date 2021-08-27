import Heading from '@/components/atoms/Heading'
import {render} from '@testing-library/react'

test('render Heading with string children prop', () => {
  const props = {
    children: 'Heading'
  }

  const {container} = render(<Heading {...props} />)

  const H1Title = container.querySelector('h1')

  expect(H1Title).not.toBeNull()
  expect(H1Title).toHaveTextContent('Heading')
})

test('render Heading with string children, id, and className prop', () => {
  const props = {
    children: 'Title',
    className: 'title-cls',
    id: 'title-id'
  }

  const {container} = render(<Heading {...props} />)

  const H1Title = container.querySelector('h1')

  expect(H1Title).not.toBeNull()
  expect(H1Title).toHaveAttribute('id', 'title-id')
  expect(H1Title).toHaveClass('title-cls')
  expect(H1Title).toHaveTextContent('Title')
})

test('render Heading with string children, style, and tag prop', () => {
  const props = {
    children: 'H6 Title',
    style: {
      backgroundColor: 'blue'
    },
    tag: 'h6'
  }

  const {container} = render(<Heading {...props} />)

  const H6Title = container.querySelector('h6')

  expect(H6Title).not.toBeNull()
  expect(H6Title).toHaveStyle({
    backgroundColor: 'blue'
  })
  expect(H6Title).toHaveTextContent('H6 Title')
})

test('render Heading with children and tag prop', () => {
  const props = {
    tag: 'h2'
  }

  const {container} = render(
    <Heading {...props}>
      <strong>Secondary Heading</strong>
    </Heading>
  )

  const H2Title = container.querySelector('h2')

  expect(H2Title).not.toBeNull()
  expect(H2Title.innerHTML).toBe('<strong>Secondary Heading</strong>')
})
