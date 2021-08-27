import Alert from '@/components/molecules/Alert'
import {render} from '@testing-library/react'

test('render Alert with body, className, icon, and type=default props', () => {
  const props = {
    body: 'Default Alert',
    className: 'custom-alert-cls',
    icon: 'award',
    type: 'default'
  }

  const {container} = render(<Alert {...props} />)

  expect(container.firstElementChild).toHaveClass('custom-alert-cls')
  expect(container.firstElementChild).not.toHaveClass('success')
  expect(container.querySelector('svg')).not.toBeNull()
  expect(container.firstElementChild.querySelector('.body')).toHaveTextContent(
    'Default Alert'
  )
})

test('render Alert with body, icon, and type=success props', () => {
  const props = {
    body: 'Success Alert',
    icon: 'award',
    type: 'success'
  }

  const {container} = render(<Alert {...props} />)

  expect(container.firstElementChild).toHaveClass('success')
  expect(container.querySelector('svg')).not.toBeNull()
  expect(container.firstElementChild.querySelector('.body')).toHaveTextContent(
    'Success Alert'
  )
})

test('render Alert with body, icon, and type=error props', () => {
  const props = {
    body: 'Error Alert',
    icon: 'award',
    type: 'error'
  }

  const {container} = render(<Alert {...props} />)

  expect(container.firstElementChild).toHaveClass('error')
  expect(container.querySelector('svg')).not.toBeNull()
  expect(container.firstElementChild.querySelector('.body')).toHaveTextContent(
    'Error Alert'
  )
})
