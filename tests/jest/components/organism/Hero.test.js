import Hero from '@/components/organisms/Hero'
import {render} from '@testing-library/react'

test('render Hero with backgroundImage, ctaText, ctaUrl, fixed, subtitle, and title props', () => {
  const props = {
    backgroundImage: {
      url: 'https://example.com/test.jpg'
    },
    ctaText: 'Take a look',
    ctaUrl: 'https://webdevstudios.com',
    fixed: true,
    subtitle: 'Check it out',
    title: 'New Designs'
  }

  const {container} = render(<Hero {...props} />)

  expect(container.firstElementChild).toHaveClass('fixed')
  expect(container.firstElementChild).not.toHaveClass('alignLeft')
  expect(container.firstElementChild).not.toHaveClass('fullHeight')
  expect(container.firstElementChild).not.toHaveAttribute('id')

  expect(container.firstElementChild).toHaveAttribute(
    'style',
    expect.stringContaining('--image-url: url(https://example.com/test.jpg)')
  )

  expect(container.querySelector('.subtitle')).toHaveTextContent('Check it out')
  expect(container.querySelector('.title')).toHaveTextContent('New Designs')

  expect(container.querySelector('.body')).toBeNull()

  // CTA button
  const ctaBtn = container.querySelector('a[href="https://webdevstudios.com"]')
  expect(ctaBtn).not.toBeNull()
  expect(ctaBtn).toHaveAttribute('aria-label', 'Take a look')
  expect(ctaBtn).toHaveTextContent('Take a look')
})

test('render Hero with align, children, className, contentAlign, fullHeight, id, and opacity props', () => {
  const props = {
    align: 'left',
    className: 'custom-hero-cls',
    contentAlign: 'top',
    fullHeight: true,
    id: 'custom-hero-id',
    overlayOpacity: 0.9
  }

  const {container} = render(
    <Hero {...props}>
      <p>Test Hero Children</p>
    </Hero>
  )

  expect(container.firstElementChild).toHaveClass(
    'custom-hero-cls alignLeft contentAlignTop fullHeight'
  )
  expect(container.firstElementChild).toHaveAttribute('id', 'custom-hero-id')

  expect(container.querySelector('.overlay')).toHaveStyle({
    opacity: 0.9
  })
})

test('render Hero with backgroundImage, body, and repeat props', () => {
  const props = {
    backgroundImage: {
      url: 'https://example.com/test-1.jpg'
    },
    body: 'Our amazing new design is here! Get it while its hot, it wont be hot for long... uh oh, already cooling.',
    repeat: true
  }

  const {container} = render(<Hero {...props} />)

  expect(container.firstElementChild).toHaveClass('repeat')
  expect(container.firstElementChild).not.toHaveClass('fixed')

  expect(container.firstElementChild).toHaveAttribute(
    'style',
    expect.stringContaining('--image-url: url(https://example.com/test-1.jpg)')
  )

  expect(container.querySelector('.subtitle')).toBeNull()
  expect(container.querySelector('.title')).toBeNull()

  expect(container.querySelector('.body')).toHaveTextContent(
    'Our amazing new design is here! Get it while its hot, it wont be hot for long... uh oh, already cooling.'
  )
})
