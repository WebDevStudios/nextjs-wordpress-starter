import Spacer from '@/components/atoms/Spacer'
import {render} from '@testing-library/react'

test('render Spacer with height prop', () => {
  const props = {
    height: 12
  }

  const {container} = render(<Spacer {...props} />)

  const computedHeight = 12 / 16

  expect(container.firstElementChild).toHaveStyle({
    height: `${computedHeight}rem`
  })
})
