import {withNextRouter} from 'storybook-addon-next-router'
import {addDecorator} from '@storybook/react'

import '../styles/index.css'

// This is so that we don't get "Uncaught TypeError: Cannot read property 'prefetch' of null" in stories with a Next.js link component.
addDecorator(
  withNextRouter({
    path: '/'
  })
)

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px'
    }
  }
}

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewport: {
    viewports: customViewports
  }
}
