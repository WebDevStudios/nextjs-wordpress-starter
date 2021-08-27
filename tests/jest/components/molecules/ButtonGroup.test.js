import ButtonGroup from '@/components/molecules/ButtonGroup'
import {render} from '@testing-library/react'

test('render ButtonGroup with id, orientation=horizontal, contentJustification=left, and children props', () => {
  const props = {
    id: 'test-id-btngrp',
    orientation: 'horizontal',
    contentJustification: 'left'
  }

  const {container} = render(
    <ButtonGroup {...props}>
      <button>Test btn</button>
    </ButtonGroup>
  )

  expect(container.firstElementChild).toHaveClass('horizontal left')
  expect(container.firstElementChild).toHaveAttribute('id', 'test-id-btngrp')
  expect(container.firstElementChild.innerHTML).toBe(
    '<button>Test btn</button>'
  )
})

test('render ButtonGroup with id, orientation=vertical, contentJustification=right, and children props', () => {
  const props = {
    orientation: 'vertical',
    contentJustification: 'right'
  }

  const {container} = render(
    <ButtonGroup {...props}>
      <div>Lorem ipsum</div>
    </ButtonGroup>
  )

  expect(container.firstElementChild).toHaveClass('vertical right')
  expect(container.firstElementChild.innerHTML).toBe('<div>Lorem ipsum</div>')
})
