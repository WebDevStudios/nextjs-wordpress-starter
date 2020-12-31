import PropTypes from 'prop-types'
import React from 'react'

export default function Hero(props) {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 p-24 lg:p-64">
        <h2 className="text-h2">{props.title}</h2>
        <p className="text-body">{props.description}</p>
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
