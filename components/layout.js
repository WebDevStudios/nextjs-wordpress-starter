import PropTypes from 'prop-types'
import Alert from '@/components/alert'
import Footer from '@/components/footer'
import Meta from '@/components/meta'

export default function Layout({preview, children, seo}) {
  return (
    <>
      <Meta seo={seo} />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  preview: PropTypes.bool,
  children: PropTypes.any.isRequired,
  seo: PropTypes.shape({
    metaDesc: PropTypes.string,
    metaKeywords: PropTypes.string,
    metaRobotsNofollow: PropTypes.string,
    metaRobotsNoindex: PropTypes.string,
    ogImage: PropTypes.string
  })
}
