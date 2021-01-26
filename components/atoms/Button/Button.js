import Icon from '@/components/atoms/Icon'
import cn from 'classnames'
import NextLink from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Button.module.css'

/**
 * Render the common inner part of the button component.
 *
 * @param {object}  props          The props object.
 * @param {string}  props.icon     Optional icon.
 * @param {boolean} props.iconOnly Whether this button is an icon only.
 * @param {string}  props.text     Button text or aria-label.
 * @return {Element}               The inside of the Button component.
 */
function ButtonInner({icon, iconOnly, text}) {
  return (
    <>
      {!iconOnly && <span className={styles.text}>{text}</span>}
      {icon && (
        <Icon icon={icon} title={text} ariaHidden={text ? true : false} />
      )}
    </>
  )
}

ButtonInner.propTypes = {
  icon: PropTypes.string,
  iconOnly: PropTypes.bool,
  text: PropTypes.string
}

/**
 * @param {object}   props             The props object.
 * @param {string}   props.attributes  Optional attributes to add to the button.
 * @param {string}   props.tag         The wrapper tag.
 * @param {string}   props.className   Optional classNames.
 * @param {boolean}  props.disabled    Whether the button is disabled.
 * @param {boolean}  props.fluid       Whether the button should be full width.
 * @param {string}   props.icon        Icon to render inside the button.
 * @param {boolean}  props.iconOnly    Whether this button should render as an icon only button.
 * @param {string}   props.iconLeft    Whether to render the icon on the left.
 * @param {Function} props.onClick     Button onClick function.
 * @param {string}   props.size        Button size.
 * @param {string}   props.text        Button text.
 * @param {string}   props.type        Button type.
 * @param {string}   props.url         Button link url.
 * @param {boolean}  props.urlExternal Whether the url on this button links to an external site.
 * @return {Element}                   The button component.
 */
export default function Button({
  attributes,
  tag,
  className,
  disabled,
  fluid,
  icon,
  iconOnly,
  iconLeft,
  onClick,
  size,
  text,
  type,
  url,
  urlExternal
}) {
  const buttonClassNames = cn(
    styles.button,
    className,
    iconOnly && styles.iconOnly,
    iconLeft && styles.iconLeft,
    fluid && styles.fluid,
    disabled && styles.disabled,
    styles[size],
    styles[type]
  )

  if (url) {
    return urlExternal ? (
      <a
        href={url}
        className={buttonClassNames}
        aria-label={text}
        {...attributes}
      >
        <ButtonInner
          icon={icon}
          iconOnly={iconOnly}
          iconLeft={iconLeft}
          text={text}
        />
      </a>
    ) : (
      <NextLink href={url}>
        <a className={buttonClassNames} aria-label={text} {...attributes}>
          <ButtonInner
            icon={icon}
            iconOnly={iconOnly}
            iconLeft={iconLeft}
            text={text}
          />
        </a>
      </NextLink>
    )
  } else {
    return (
      // Render element with default button tag.
      React.createElement(
        `${tag}`,
        {
          className: buttonClassNames,
          'aria-label': text,
          onClick,
          ...attributes,
          disabled
        },
        <ButtonInner
          icon={icon}
          iconOnly={iconOnly}
          iconLeft={iconLeft}
          text={text}
        />
      )
    )
  }
}

Button.propTypes = {
  attributes: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  icon: PropTypes.string,
  iconOnly: PropTypes.bool,
  iconLeft: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  url: PropTypes.string,
  urlExternal: PropTypes.bool
}

Button.defaultProps = {
  disabled: false,
  iconOnly: false,
  iconLeft: false,
  size: 'md',
  tag: 'button',
  type: 'primary',
  urlExternal: false
}
