import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const ShootingStars = () => {
  return (
    <article className='shootingStarsWrapper'>
      <header>Shooting Stars</header>
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <Link className='prev' to='/animation5' title='Prev' />
      <Link className='next' to='/animation7' title='Next' />
    </article>
  )
}

export default ShootingStars
