import Logo from '@/components/atoms/Logo'
import {render} from '@testing-library/react'

test('render Logo with className, and type-dark props', () => {
  const props = {
    className: 'logo-ctm-cls',
    type: 'dark'
  }

  const {container} = render(<Logo {...props} />)

  const logo = container.querySelector('svg')

  expect(logo).toHaveClass('logo-ctm-cls')
  expect(logo).toHaveAttribute('fill', '#414141')
})

test('render Logo with type-light prop', () => {
  const props = {
    type: 'light'
  }

  const {container} = render(<Logo {...props} />)

  const logo = container.querySelector('svg')

  expect(logo).toHaveAttribute('fill', '#f9fbfd')
})
