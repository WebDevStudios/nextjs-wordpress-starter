import PropTypes from 'prop-types'
import React from 'react'
import styles from './Code.module.css'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism'

/**
 * Render the Code component.
 *
 * @author WebDevStudios
 * @param {object}      props           The component attributes as props.
 * @param {string}      props.className Optional classname.
 * @param props.id
 * @param props.content
 * @param {boolean}     props.fullWidth Is this a fullwidth block.
 * @return {Element} The Code component.
 */
export default function Code({id, className, content}) {
  // Use the className to pass the langauge.
  const language = className ? className : 'javascript'

  // Replace any `&lt;` encoded HTML.
  const code = content.replace(/&lt;/g, '<')

  return (
    <>
      {!!content && (
        <div id={id ? id : null} className={styles.code}>
          <SyntaxHighlighter style={tomorrow} language={language}>
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </>
  )
}

Code.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string
}
