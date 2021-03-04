import PropTypes from 'prop-types'
import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from './Code.module.css'

/**
 * Render the Code component.
 *
 * @author WebDevStudios
 * @param {object} props           The component attributes as props.
 * @param {string} props.className Optional classname.
 * @param {string} props.id        The optional ID.
 * @param {string} props.content   The content for inside the code block.
 * @return {Element}               The Code component.
 */
export default function Code({id, className, content}) {
  // Use the className to pass the langauge.
  const language = className ? className : 'javascript'

  /**
   * Replace any `&lt;` and `&gt; encoded HTML.
   *
   * @param {string} content The content string.
   * @return {string}        The formatted content string.
   */
  function codeFormatter(content) {
    if (!content) {
      return null
    }

    let code = content.replace(/&lt;/g, '<')
    return code.replace(/&gt;/g, '>')
  }

  return (
    <>
      {!!content && (
        <div id={id ? id : null} className={styles.code}>
          <SyntaxHighlighter style={tomorrow} language={language}>
            {codeFormatter(content)}
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
