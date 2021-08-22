import Container from '@/components/atoms/Container'
import {render} from '@testing-library/react'

test('render Container with children and false paddingTop prop', () => {
  const props = {
    paddingTop: false,
    paddingBtm: true
  }
  const {container} = render(
    <Container {...props}>
      <article>
        <p>Lorem ipsum.</p>
      </article>
    </Container>
  )

  expect(container.firstElementChild).not.toHaveClass('paddingTop')
  expect(container.firstElementChild).toHaveClass('paddingBtm')
  expect(container.firstElementChild.innerHTML).toBe(
    '<article><p>Lorem ipsum.</p></article>'
  )
})

test('render Container with children and false padding props', () => {
  const props = {
    paddingTop: false,
    paddingBtm: false
  }
  const {container} = render(
    <Container {...props}>
      <h1>Lorem ipsum.</h1>
    </Container>
  )

  expect(container.firstElementChild).not.toHaveClass('paddingTop')
  expect(container.firstElementChild).not.toHaveClass('paddingBtm')
  expect(container.firstElementChild.innerHTML).toBe('<h1>Lorem ipsum.</h1>')
})

test('render Container with children and padding props', () => {
  const props = {
    paddingTop: true,
    paddingBtm: true
  }
  const {container} = render(
    <Container {...props}>
      <img src="http://localhost/sample.png" alt="Sample img" />
    </Container>
  )

  expect(container.firstElementChild).toHaveClass('paddingTop')
  expect(container.firstElementChild).toHaveClass('paddingBtm')
  expect(container.firstElementChild.innerHTML).toBe(
    '<img src="http://localhost/sample.png" alt="Sample img">'
  )
})
