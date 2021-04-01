import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {addDecorator} from '@storybook/react'
import * as nextImage from 'next/image'
import {withNextRouter} from 'storybook-addon-next-router'
import '../styles/demo.css'
import '../styles/index.css'

/**
 * Enable Next.js <Link /> component usage.
 *
 * @see https://storybook.js.org/addons/storybook-addon-next-router
 */
addDecorator(
  withNextRouter({
    path: '/'
  })
)

/**
 * Enable Next.js <Image /> component usage.
 *
 * @see https://stackoverflow.com/questions/64622746/how-to-mock-next-js-image-component-in-storybook
 */
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />
  }
})

/**
 * Custom viewports based on popular Apple devices.
 *
 * @see https://storybook.js.org/docs/react/essentials/viewport#add-new-devices
 */
const customViewports = {
  largeMobile: {
    name: 'iPhone X/11/12 Pro',
    styles: {
      width: '428px',
      height: '926px'
    },
    type: 'mobile'
  },
  smallLaptop: {
    name: 'MacBook Air 13"',
    styles: {
      width: '1280px',
      height: '800px'
    },
    type: 'desktop'
  },
  largeLaptop: {
    name: 'MacBook Pro 16"',
    styles: {
      width: '1536px',
      height: '960px'
    }
  },
  destkop: {
    name: 'iMac 5k',
    styles: {
      width: '2048px',
      height: '1152px'
    },
    type: 'desktop'
  }
}

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS
    }
  }
}
