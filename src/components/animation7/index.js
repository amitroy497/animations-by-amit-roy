import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const ButtonRippleEffectOnHover = () => {
  return (
    <article className='buttonRipperHoverWrapper'>
      <header>Button Ripple Hover</header>
      <section>
        <button>Pause</button>
      </section>
      <Link className='prev' to='/animation6' title='Prev' />
      <Link className='next' to='/animation8' title='Next' />
    </article>
  )
}

export default ButtonRippleEffectOnHover
