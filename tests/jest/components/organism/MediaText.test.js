import MediaText from '@/components/organisms/MediaText'
import {render} from '@testing-library/react'

test('render MediaText with body, className, image, mediaLeft, title, and verticalAlignment=top props', () => {
  const props = {
    className: 'media-text-custom-cls',
    image: {
      url: 'https://example.com/test.jpg',
      alt: 'Test image'
    },
    mediaLeft: true,
    verticalAlignment: 'top'
  }

  const {container} = render(
    <MediaText {...props}>
      <p>MediaText children</p>
    </MediaText>
  )

  expect(container.firstElementChild).toHaveClass(
    'mediaLeft media-text-custom-cls noStack alignTop'
  )

  expect(container.querySelector('.text').innerHTML).toBe(
    '<p>MediaText children</p>'
  )

  expect(container.querySelector('h1')).toBeNull()
  expect(container.querySelector('.body')).toBeNull()

  expect(
    container.querySelector('.media').querySelector('img')
  ).toHaveAttribute('alt', 'Test image')
})

test('render MediaText with body, cta, stackOnMobile, and verticalAlignment=bottom props', () => {
  const props = {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cta: {
      icon: 'arrowLeft',
      text: 'CTA Btn',
      url: 'https://example.com'
    },
    stackOnMobile: true,
    title: 'Lorem ipsum',
    verticalAlignment: 'bottom'
  }

  const {container} = render(<MediaText {...props} />)

  expect(container.firstElementChild).toHaveClass('alignBottom')
  expect(container.firstElementChild).not.toHaveClass('mediaLeft noStack')

  expect(container.querySelector('h1')).toHaveTextContent('Lorem ipsum')
  expect(container.querySelector('.body')).toHaveTextContent(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  )

  expect(
    container.querySelector('a[href="https://example.com"]')
  ).toHaveTextContent('CTA Btn')

  expect(container.querySelector('.media').querySelector('img')).toBeNull()
})
