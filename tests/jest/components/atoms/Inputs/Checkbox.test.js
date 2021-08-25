import Checkbox from '@/components/atoms/Inputs/Checkbox'
import Form from '@/components/molecules/Form'
import {render} from '@testing-library/react'

test('render Checkbox with className, id, label, name, and value', () => {
  const props = {
    className: 'checkbox-test-cls',
    id: 'awesome-id',
    label: 'Are you awesome',
    name: 'awesome',
    value: 'am-awesome'
  }

  const form = (
    <Form>
      <h1>Checkbox</h1>
      <Checkbox {...props} />
    </Form>
  )

  const {container} = render(form)

  const checkboxContainer = container.querySelector('.checkbox-test-cls')

  expect(checkboxContainer).not.toBeNull()
  expect(checkboxContainer.querySelector('label')).toHaveAttribute(
    'for',
    'awesome-id'
  )
  expect(checkboxContainer).toHaveTextContent('Are you awesome')

  const checkboxInput = checkboxContainer.querySelector('input')

  expect(checkboxInput).toHaveAttribute('name', 'awesome')
  expect(checkboxInput).toHaveAttribute('type', 'checkbox')
  expect(checkboxInput).toHaveAttribute('value', 'am-awesome')
})
