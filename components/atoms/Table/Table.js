import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './Table.module.css'

/**
 * Table Block
 *
 * @author WebDevStudios
 * @param {object} props           The component properties.
 * @param {string} props.id        Optional anchor/id.
 * @param {string} props.head      The optional table head array.
 * @param {string} props.body      The table body array.
 * @param {string} props.foot      The optional table foorter array.
 * @param {string} props.caption   Optional table caption.
 * @param {string} props.className Optional classnames.
 * @return {Element}               The Table component.
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
          {!!caption && (
            <div className={styles.caption}>
              <RichText tag="span">{caption}</RichText>
            </div>
          )}
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
