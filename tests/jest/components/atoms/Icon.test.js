import Icon, {sizeToPx} from '@/components/atoms/Icon'
import {icons} from '@/components/atoms/Icon/icons'
import {render} from '@testing-library/react'

test('sizeToPx', () => {
  expect(sizeToPx('sm')).toBe(16)
  expect(sizeToPx('md')).toBe(20)
  expect(sizeToPx('lg')).toBe(24)
})

test('render Icon with ariaHidden, className, and icon props', () => {
  const props = {
    ariaHidden: false,
    className: 'icon-cls-test',
    icon: 'award',
    size: 'sm'
  }

  const {container} = render(<Icon {...props} />)

  const expectedSize = sizeToPx('sm').toString()

  const icon = container.querySelector('svg')

  expect(icon).toHaveAttribute('aria-hidden', 'false')
  expect(icon).toHaveClass('icon-cls-test')
  expect(icon).toHaveAttribute('height', expectedSize)
  expect(icon).toHaveAttribute('width', expectedSize)
})

test('render Icon with icon, size and title props', () => {
  const props = {
    icon: 'arrowRight',
    size: 'md',
    title: 'Right Arrow'
  }

  const expectedSize = sizeToPx('md').toString()

  const {container} = render(<Icon {...props} />)

  const icon = container.querySelector('svg')

  expect(icon).toHaveAttribute('height', expectedSize)
  expect(icon).toHaveAttribute('width', expectedSize)

  expect(container.querySelector('title')).toHaveTextContent('Right Arrow')
})

test('render Icon with icon, size, and style-line props', () => {
  const props = {
    icon: 'volumeUp',
    size: 'lg',
    style: 'line'
  }

  const expectedSize = sizeToPx('lg').toString()

  const {container} = render(<Icon {...props} />)

  const icon = container.querySelector('svg')

  expect(icon).toHaveAttribute('height', expectedSize)
  expect(icon).toHaveAttribute('width', expectedSize)
  expect(icon.querySelector('path')).toHaveAttribute(
    'd',
    icons['volumeUp']['line']
  )
})

test('render Icon with icon, and style-fill props', () => {
  const props = {
    icon: 'unlock',
    style: 'fill'
  }

  const {container} = render(<Icon {...props} />)

  const icon = container.querySelector('svg')

  expect(icon.querySelector('path')).toHaveAttribute(
    'd',
    icons['unlock']['unlock']
  )
})
