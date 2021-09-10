import Card from '@/components/molecules/Card'
import {render} from '@testing-library/react'

test('render Card with body, className, meta, and title props', () => {
  const props = {
    body: '<p>Donec eget nulla ultricies, aliquam ex nec, commodo tellus.</p>',
    className: 'test-crd-cls',
    meta: 'Test Meta',
    title: 'Lorem ipsum'
  }

  const {container} = render(<Card {...props} />)

  const card = container.firstElementChild

  expect(card).toHaveClass('test-crd-cls')
  expect(card.querySelector('.meta')).toHaveTextContent('Test Meta')
  expect(card.querySelector('h1')).toHaveTextContent('Lorem ipsum')
  expect(card.querySelector('.body')).toHaveTextContent(
    'Donec eget nulla ultricies, aliquam ex nec, commodo tellus.'
  )
})

test('render Card with body, timestamp, title, and url props', () => {
  const props = {
    body: '<p>Nullam fringilla, metus a convallis euismod, erat mauris luctus quam, ut fringilla ipsum mauris at sapien.</p>',
    timestamp: 'May 29, 2021',
    title: 'Lorem ipsum',
    url: '/blog'
  }

  const {container} = render(<Card {...props} />)

  const card = container.firstElementChild

  const title = card.querySelector('h1')

  expect(title).toHaveTextContent('Lorem ipsum')
  expect(title.parentElement).toHaveAttribute('href', '/blog')

  expect(card.querySelector('.body').innerHTML).toBe(
    '<p>Nullam fringilla, metus a convallis euismod, erat mauris luctus quam, ut fringilla ipsum mauris at sapien.</p>'
  )

  const footer = card.querySelector('.footer')
  expect(footer.querySelector('time')).toHaveTextContent('May 29, 2021')
})

test('render Card with body, buttonText, image, and url props', () => {
  const props = {
    body: 'Sed a mauris magna. Integer tempus congue ligula, sed pretium risus luctus sit amet.',
    buttonText: 'Aliquam pretium',
    image: {
      altText: 'Card image',
      height: '110',
      sourceUrl:
        'https://images.unsplash.com/photo-1610991149688-c1321006bcc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1110&q=60',
      width: '200'
    },
    url: 'https://webdevstudios.com'
  }

  const {container} = render(<Card {...props} />)

  const card = container.firstElementChild

  expect(card.querySelector('.image').querySelector('img')).toHaveAttribute(
    'alt',
    'Card image'
  )
  expect(card.querySelector('.image').querySelector('img')).toHaveAttribute(
    'height',
    '110'
  )
  expect(card.querySelector('.image').querySelector('img')).toHaveAttribute(
    'width',
    '200'
  )
  expect(card.querySelector('.image').querySelector('img')).toHaveAttribute(
    'src',
    'https://images.unsplash.com/photo-1610991149688-c1321006bcc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1110&q=60'
  )

  expect(card.querySelector('.body')).toHaveTextContent(
    'Sed a mauris magna. Integer tempus congue ligula, sed pretium risus luctus sit amet.'
  )

  const footer = card.querySelector('.footer')

  const button = footer.querySelector('.button')

  expect(button).toHaveAttribute('href', 'https://webdevstudios.com')
  expect(button).toHaveTextContent('Aliquam pretium')
})
