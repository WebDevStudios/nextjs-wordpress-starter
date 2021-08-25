import CheckboxGroup from '@/components/atoms/Inputs/CheckboxGroup'
import Form from '@/components/molecules/Form'
import {render} from '@testing-library/react'

test('render CheckboxGroup with checkboxes, className, description, id, label, and isRequired props', () => {
  const props = {
    checkboxes: [
      {
        id: 'single',
        label: 'Single',
        value: 'single'
      },
      {
        id: 'married',
        label: 'Married',
        value: 'married'
      }
    ],
    className: 'cbgrp-cls',
    description: 'Test Checkbox Group',
    id: 'test-cb',
    label: 'Test CB',
    isRequired: true
  }

  const form = (
    <Form>
      <h1>CheckboxGroup</h1>
      <CheckboxGroup {...props} />
    </Form>
  )

  const {container} = render(form)

  const cbGroup = container.querySelector('#test-cb')
  expect(cbGroup).not.toBeNull()
  expect(cbGroup).toHaveClass('cbgrp-cls')
  expect(cbGroup).toHaveTextContent('Test Checkbox Group')

  const labels = cbGroup.querySelectorAll('label')
  expect(labels).toHaveLength(3)

  expect(labels[0]).not.toBeNull()
  expect(labels[0]).toHaveTextContent('Test CB')
  expect(labels[0]).toHaveAttribute('required')

  expect(labels[1]).not.toBeNull()
  expect(labels[1]).toHaveTextContent('Single')
  expect(labels[1].querySelector('input')).toHaveAttribute('type', 'checkbox')
  expect(labels[1].querySelector('input')).toHaveAttribute('value', 'single')

  expect(labels[2]).not.toBeNull()
  expect(labels[2]).toHaveTextContent('Married')
  expect(labels[2].querySelector('input')).toHaveAttribute('type', 'checkbox')
  expect(labels[2].querySelector('input')).toHaveAttribute('value', 'married')
})

test('render CheckboxGroup with checkboxes prop', () => {
  const props = {
    checkboxes: [
      {
        id: 'php',
        label: 'PHP',
        value: 'php'
      },
      {
        id: 'wordpress',
        label: 'WordPress',
        value: 'wordpress'
      }
    ],
    id: 'test-cb-group'
  }

  const form = (
    <Form>
      <h1>CheckboxGroup</h1>
      <CheckboxGroup {...props} />
    </Form>
  )

  const {container} = render(form)

  const cbGroup = container.querySelector('#test-cb-group')
  expect(cbGroup).not.toBeNull()

  const labels = cbGroup.querySelectorAll('label')
  expect(labels).toHaveLength(2)

  expect(labels[0]).not.toBeNull()
  expect(labels[0]).toHaveTextContent('PHP')
  expect(labels[0].querySelector('input')).toHaveAttribute('type', 'checkbox')
  expect(labels[0].querySelector('input')).toHaveAttribute('value', 'php')

  expect(labels[1]).not.toBeNull()
  expect(labels[1]).toHaveTextContent('WordPress')
  expect(labels[1].querySelector('input')).toHaveAttribute('type', 'checkbox')
  expect(labels[1].querySelector('input')).toHaveAttribute('value', 'wordpress')
})
