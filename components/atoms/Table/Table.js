import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './Table.module.css'

/**
 * Table Block
 *
 * @author WebDevStudios
 * @param {string} id        Optional anchor/id.
 * @param {string} head      The optional table head array.
 * @param {string} body      The table body array.
 * @param {string} body      The table body array.
 * @param {string} foot      The optional table foorter array.
 * @param {string} caption   Optional table caption.
 * @param {string} className Optional classnames.
 * @return {Element} The Table component.
 */
export default function Table({id, head, body, foot, caption, className}) {
  return (
    <>
      {!!body.length && (
        <div className={cn(styles.table, className)} id={id || null}>
          <table>
            {!!head?.length && (
              <thead>
                {head.map((row, index) => {
                  return (
                    <tr key={index}>
                      {!!row?.cells &&
                        row.cells.map((cell, index) => {
                          return (
                            <RichText
                              tag="th"
                              key={index}
                              className={
                                cell?.align !== ''
                                  ? `text-${cell.align}`
                                  : 'text-left'
                              }
                            >
                              {cell.content}
                            </RichText>
                          )
                        })}
                    </tr>
                  )
                })}
              </thead>
            )}
            <tbody>
              {body.map((row, index) => {
                return (
                  <tr key={index}>
                    {!!row?.cells &&
                      row.cells.map((cell, index) => {
                        return (
                          <RichText
                            tag="td"
                            key={index}
                            className={
                              cell?.align !== ''
                                ? `text-${cell.align}`
                                : 'text-left'
                            }
                          >
                            {cell.content}
                          </RichText>
                        )
                      })}
                  </tr>
                )
              })}
            </tbody>

            {!!foot?.length && (
              <tfoot>
                {foot.map((row, index) => {
                  return (
                    <tr key={index}>
                      {!!row?.cells &&
                        row.cells.map((cell, index) => {
                          return (
                            <RichText
                              tag="td"
                              key={index}
                              className={
                                cell?.align !== ''
                                  ? `text-${cell.align}`
                                  : 'text-left'
                              }
                            >
                              {cell.content}
                            </RichText>
                          )
                        })}
                    </tr>
                  )
                })}
              </tfoot>
            )}
          </table>
          {!!caption && <RichText tag="p">{caption}</RichText>}
        </div>
      )}
    </>
  )
}

Table.propTypes = {
  id: PropTypes.string,
  head: PropTypes.array,
  body: PropTypes.array,
  foot: PropTypes.array,
  caption: PropTypes.string,
  className: PropTypes.string
}
