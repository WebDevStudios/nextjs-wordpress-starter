import ImageGallery from '@/components/molecules/ImageGallery'
import {render} from '@testing-library/react'

test('render ImageGallery anchor, caption, columns, className, and images', () => {
  const expectedImages = [
    {
      url: 'https://images.unsplash.com/photo-1610991149688-c1321006bcc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
      alt: 'Rocky cliffs in the ocean b.'
    },
    {
      url: 'https://images.unsplash.com/photo-1612792515895-d63f3e98da60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
      alt: 'Building reflections.'
    },
    {
      url: 'https://images.unsplash.com/photo-1612787873730-99bb61ae700e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
      alt: 'Building with an overcast sky background.'
    },
    {
      url: 'https://images.unsplash.com/photo-1612738072307-3a48bbc7fd80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
      alt: 'Frost on a pane of glass.'
    }
  ]

  const props = {
    anchor: 'img-gallery-id',
    caption: 'Test caption',
    columns: 3,
    className: 'img-gallery-cls',
    images: expectedImages
  }

  const {container} = render(<ImageGallery {...props} />)

  expect(container.firstElementChild).toHaveClass('img-gallery-cls')
  expect(container.firstElementChild).toHaveAttribute('id', 'img-gallery-id')

  const images = container.querySelector('.columns-3').querySelectorAll('img')

  images.forEach(($el) => {
    const imgElement = {
      url: $el.getAttribute('src'),
      alt: $el.getAttribute('alt')
    }

    expect(expectedImages).toContainEqual(imgElement)
  })

  expect(container.querySelector('.caption')).toHaveTextContent('Test caption')
})

test('render ImageGallery columns, and images', () => {
  const expectedImages = [
    {
      url: 'https://images.unsplash.com/photo-1610991149688-c1321006bcc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
      alt: null
    },
    {
      url: 'https://images.unsplash.com/photo-1612792515895-d63f3e98da60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
      alt: 'Test'
    }
  ]

  const props = {
    columns: 2,
    images: expectedImages
  }

  const {container} = render(<ImageGallery {...props} />)

  expect(container.firstElementChild).not.toHaveAttribute('id')

  const images = container.querySelector('.columns-2').querySelectorAll('img')

  images.forEach(($el) => {
    const imgElement = {
      url: $el.getAttribute('src'),
      alt: $el.getAttribute('alt')
    }

    expect(expectedImages).toContainEqual(imgElement)
  })

  expect(container.querySelector('.caption')).toBeNull()
})
