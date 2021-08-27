import Text from '@/components/atoms/Inputs/Text'
import Form from '@/components/molecules/Form'
import {render} from '@testing-library/react'

test('render Form with children, className, formDefaults id, title, and onSubmit props', () => {
  const props = {
    className: 'test-form-cls',
    formDefaults: {
      username: '',
      password: ''
    },
    id: 'test-form-id',
    title: 'Test form',
    onSubmit: () => {}
  }

  const {container} = render(
    <Form {...props}>
      <h1>Login Form</h1>
      <Text id="username" label="Username" isRequired type="text" />
      <Text id="password" label="Password" isRequired type="password" />
    </Form>
  )

  const form = container.querySelector('#test-form-id')

  expect(form).toHaveClass('test-form-cls')

  expect(form.querySelector('h1')).toHaveTextContent('Login Form')

  expect(form.querySelector('input#username')).not.toBeNull()
  expect(form.querySelector('input#password')).not.toBeNull()
  expect(form.querySelector('button[type="submit"]')).not.toBeNull()
})
