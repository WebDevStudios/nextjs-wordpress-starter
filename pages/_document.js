import Document, {Head, Html, Main, NextScript} from 'next/document'
import React from 'react'

/**
 * Render the custom Document component.
 *
 * @author WebDevStudios
 * @return {React.ReactElement} The custom Document component.
 */
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
