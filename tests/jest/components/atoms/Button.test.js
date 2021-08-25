import Button, {ButtonInner} from '@/components/atoms/Button'
import {render} from '@testing-library/react'

test('render ButtonInner with text prop', () => {
  const props = {
    text: 'Go Back'
  }

  const {container} = render(<ButtonInner {...props} />)

  expect(container.querySelector('svg')).toBeNull()
  expect(container.firstElementChild).toHaveTextContent('Go Back')
})

test('render ButtonInner with iconOnly prop', () => {
  const props = {
    iconOnly: true,
    icon: 'arrowLeft',
    text: 'Left'
  }

  const {container} = render(<ButtonInner {...props} />)

  expect(container.querySelector('svg')).not.toBeNull()
  expect(container.firstElementChild).not.toHaveTextContent()
})

test('render ButtonInner with icon, and text props', () => {
  const props = {
    iconOnly: false,
    icon: 'arrowLeft',
    text: 'Go to the left'
  }

  const {container} = render(<ButtonInner {...props} />)

  expect(container.querySelector('svg')).not.toBeNull()
  expect(container.firstElementChild).toHaveTextContent('Go to the left')
})

test('render Button with text, and url props', () => {
  const props = {
    text: 'Sample button',
    url: '/blog'
  }

  const {container} = render(<Button {...props} />)

  expect(container.firstElementChild).toHaveAttribute('href', '/blog')
  expect(container.firstElementChild).toHaveTextContent('Sample button')
})

test('render Button with className, fluid, icon, iconLeft, size, text and url props', () => {
  const props = {
    className: 'btn-test',
    fluid: true,
    icon: 'arrowLeft',
    iconLeft: true,
    size: 'lg',
    text: 'Button with arrow left',
    url: 'https://webdevstudios.com',
    urlExternal: true
  }

  const {container} = render(<Button {...props} />)

  expect(container.firstElementChild).toHaveClass('btn-test fluid lg')
  expect(container.firstElementChild).toHaveAttribute(
    'href',
    'https://webdevstudios.com'
  )
  expect(container).toHaveTextContent('Button with arrow left')
  expect(container.querySelector('svg')).not.toBeNull()
})

test('render Button with attributes, disabled, icon, iconOnly, size, styleOutline, text and url props', () => {
  const props = {
    attributes: {
      'aria-expanded': true,
      'aria-hidden': false
    },
    disabled: true,
    icon: 'arrowLeft',
    iconOnly: true,
    size: 'sm',
    styleOutline: true,
    text: 'Outlined button',
    url: '/blog/lorem-ipsum'
  }

  const {container} = render(<Button {...props} />)

  expect(container.firstElementChild).toHaveAttribute(
    'href',
    '/blog/lorem-ipsum'
  )
  expect(container.firstElementChild).toHaveAttribute('aria-expanded', 'true')
  expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'false')
  expect(container.firstElementChild).toHaveClass(
    'iconOnly disabled sm styleOutline'
  )
  expect(container).not.toHaveTextContent()
})

test('render Button with text props', () => {
  const props = {
    text: 'Simple button'
  }

  const {container} = render(<Button {...props} />)

  const button = container.querySelector('button')

  expect(button).not.toBeNull()
  expect(button).toHaveTextContent('Simple button')
})

test('render Button with tag, and text props', () => {
  const props = {
    tag: 'div',
    text: 'Div button'
  }

  const {container} = render(<Button {...props} />)

  expect(container.querySelector('button')).toBeNull()
  expect(container.querySelector('div')).not.toBeNull()
  expect(container.querySelector('div')).toHaveTextContent('Div button')
})
