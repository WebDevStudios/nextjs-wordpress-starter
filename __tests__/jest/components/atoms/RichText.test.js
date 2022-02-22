import RichText from '@/components/atoms/RichText'
import {render} from '@testing-library/react'

test('render RichText with children, className, dropCap and style props', () => {
  const props = {
    className: 'custom-rt-cls',
    dropCap: true,
    style: {
      backgroundColor: 'red'
    }
  }

  const {container} = render(
    <RichText {...props}>This is a rich text example.</RichText>
  )

  expect(container.firstElementChild).toHaveClass('dropcap custom-rt-cls')
  expect(container.firstElementChild).toHaveStyle({
    backgroundColor: 'red'
  })
  expect(container).toHaveTextContent('This is a rich text example.')
})

test('render RichText with attributes, children, id and tag props', () => {
  const props = {
    attributes: {
      'data-att': true
    },
    id: 'rt-ctm-id',
    tag: 'span'
  }

  const {container} = render(
    <RichText {...props}>This is a span example.</RichText>
  )

  const richTextSpan = container.querySelector('span')

  expect(richTextSpan).not.toHaveClass('dropcap')
  expect(richTextSpan).toHaveAttribute('id', 'rt-ctm-id')
  expect(richTextSpan).toHaveAttribute('data-att', 'true')
  expect(richTextSpan).toHaveTextContent('This is a span example.')
})
