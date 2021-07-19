import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const RippleAnimation = () => {
  return (
    <article className='rippleAnimationWrapper'>
      <header>Ripple Animation</header>
      <section className='container'>
        <div className='box'>
          <span style={{ '--i': '1' }}></span>
          <span style={{ '--i': '2' }}></span>
          <span style={{ '--i': '3' }}></span>
          <span style={{ '--i': '4' }}></span>
          <span style={{ '--i': '5' }}></span>
          <span style={{ '--i': '6' }}></span>
          <span style={{ '--i': '7' }}></span>
          <span style={{ '--i': '8' }}></span>
          <span style={{ '--i': '9' }}></span>
          <span style={{ '--i': '10' }}></span>
        </div>
        <div className='box'>
          <span style={{ '--i': '1' }}></span>
          <span style={{ '--i': '2' }}></span>
          <span style={{ '--i': '3' }}></span>
          <span style={{ '--i': '4' }}></span>
          <span style={{ '--i': '5' }}></span>
          <span style={{ '--i': '6' }}></span>
          <span style={{ '--i': '7' }}></span>
          <span style={{ '--i': '8' }}></span>
          <span style={{ '--i': '9' }}></span>
          <span style={{ '--i': '10' }}></span>
        </div>
      </section>
      <Link className='prev' to='/animation7' title='Prev' />
      <Link className='next' to='/animation9' title='Next' />
    </article>
  )
}

export default RippleAnimation
