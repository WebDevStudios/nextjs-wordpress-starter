import LzbMediaText from '@/components/organisms/LzbMediaText'
import {render} from '@testing-library/react'

test('render LzbMediaText with ctaText, ctaUrl, and title props', () => {
  const props = {
    ctaText: 'LzbMediaText CTA',
    ctaUrl: 'https://example.com',
    title: 'Lorem ipsum'
  }

  const {container} = render(<LzbMediaText {...props} />)
  const section = container.querySelector('.lzbMediaText')

  expect(section).not.toHaveClass('mediaLeft')
  expect(section.querySelector('.body')).toBeNull()

  // CTA btn
  const ctaBtn = section.querySelector('a[href="https://example.com"]')
  expect(ctaBtn).not.toBeNull()
  expect(ctaBtn).toHaveTextContent('LzbMediaText CTA')

  // Media
  expect(section.querySelector('.media').querySelector('img')).toBeNull()
})

test('render LzbMediaText with body, image, mediaLeft props', () => {
  const props = {
    body: 'Lorem ipsum dolor sit amet.',
    image: {
      url: 'https://example.com/test2.png',
      alt: 'consectetur'
    },
    mediaLeft: true
  }

  const {container} = render(<LzbMediaText {...props} />)

  const section = container.querySelector('.lzbMediaText')
  expect(section).toHaveClass('mediaLeft')

  expect(section.querySelector('h1')).toBeNull()
  expect(section.querySelector('.body')).toHaveTextContent(
    'Lorem ipsum dolor sit amet.'
  )

  // CTA btn
  const ctaBtn = section.querySelector('a')
  expect(ctaBtn).toBeNull()

  // Media
  const media = section.querySelector('.media')
  expect(media).not.toBeNull()
  expect(media.querySelector('img')).toHaveAttribute('alt', 'consectetur')
  expect(media.querySelector('img')).toHaveAttribute(
    'src',
    'https://example.com/test2.png'
  )
})

test('render LzbMediaText with body, className, ctaText, ctaUrl, image, mediaLeft, and title props', () => {
  const props = {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className: 'custom-cls',
    ctaText: 'CTA Text',
    ctaUrl: 'https://webdevstudios.com',
    image: {
      url: 'https://example.com/test.png',
      alt: 'Some alt text'
    },
    mediaLeft: true,
    title: 'Lorem ipsum'
  }

  const {container} = render(<LzbMediaText {...props} />)

  const section = container.querySelector('.lzbMediaText')

  expect(section).toHaveClass('custom-cls mediaLeft')

  expect(section.querySelector('h1')).toHaveTextContent('Lorem ipsum')
  expect(section.querySelector('.body')).toHaveTextContent(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  )

  // CTA btn
  const ctaBtn = section.querySelector('a[href="https://webdevstudios.com"]')
  expect(ctaBtn).not.toBeNull()
  expect(ctaBtn).toHaveTextContent('CTA Text')

  // Media
  const media = section.querySelector('.media')
  expect(media).not.toBeNull()
  expect(media.querySelector('img')).toHaveAttribute('alt', 'Some alt text')
  expect(media.querySelector('img')).toHaveAttribute(
    'src',
    'https://example.com/test.png'
  )
})
