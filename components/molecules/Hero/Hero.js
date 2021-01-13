import PropTypes from 'prop-types'
import React from 'react'

/**
 * Render the Hero component.
 *
 * @author WebDevStudios
 * @param {object} props             The component attributes as props.
 * @param {string} props.background  The hero background.
 * @param {string} props.description The hero description.
 * @param {string} props.title       The hero title.
 * @return {Element}                 The Hero component.
 */
export default function Hero(props) {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 p-24 lg:p-64">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
          {props?.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl">{props?.description}</p>
      </div>
      <div className="absolute top-0 z-0">
        <img src={props?.background} alt="" loading="lazy" />
      </div>
    </section>
  )
}

Hero.propTypes = {
  background: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}
