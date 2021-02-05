const path = require('path')

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
  stories: [
    '../components/**/**/*.stories.@(js|mdx)',
    '../docs/**/**/*.stories.@(mdx)'
  ],
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

    return config
  }
}
