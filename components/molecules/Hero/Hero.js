import React from 'react'
import PropTypes from 'prop-types'

export default function Hero(props) {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 p-24 lg:p-64">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
          {props.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl">{props.description}</p>
      </div>
      <div className="absolute top-0 z-0">
        <img src={props.background} alt="" loading="lazy" />
      </div>
    </section>
  )
}

Hero.propTypes = {
  background: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}
