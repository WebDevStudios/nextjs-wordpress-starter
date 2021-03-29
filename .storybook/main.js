const path = require('path')
const webpack = require('webpack')

/**
 * Configure Storybook.
 *
 * @see https://storybook.js.org/docs/react/configure/overview
 */
module.exports = {
  reactOptions: {
    fastRefresh: true,
    strictMode: true
  },
  stories: ['../components/**/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    'storybook-css-modules-preset'
  ],
  webpackFinal: async (config) => {
    // Enable @ symbol aliases.
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../')
    }

    // Enable sourcemaps in Storybook.
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    })

    // Enable Next.js <Image /> component support.
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: [
            'nextjs.wpengine.com',
            'nextjsdevstart.wpengine.com',
            'nextjswp.test'
          ],
          path: '/',
          loader: 'default'
        })
      })
    )

    return config
  }
}
