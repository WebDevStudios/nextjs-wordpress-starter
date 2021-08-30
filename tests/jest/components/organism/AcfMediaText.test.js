import AcfMediaText from '@/components/organisms/AcfMediaText'
import {render} from '@testing-library/react'

test('render AcfMediaText with body, className, ctaText, ctaUrl, and title props', () => {
  const props = {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className: 'custom-cls',
    ctaText: 'Quisque ut nunc purus',
    ctaUrl: 'https://webdevstudios.com',
    title: 'Mauris sed'
  }

  const {container} = render(<AcfMediaText {...props} />)

  const section = container.querySelector('.custom-cls')

  expect(section.querySelector('h1')).toHaveTextContent('Mauris sed')
  expect(section.querySelector('.body')).toHaveTextContent(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  )

  // Find ctaUrl
  const ctaUrl = section.querySelector('a[href="https://webdevstudios.com"]')
  expect(ctaUrl).not.toBeNull()
  expect(ctaUrl).toHaveTextContent('Quisque ut nunc purus')
})
