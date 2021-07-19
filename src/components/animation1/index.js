import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const SwipeToExplore = () => {
  return (
    <article className='shineButtonWrapper'>
      <header>Swipe Animation</header>
      <button className='shineButton'>Swipe To Explore</button>
      <Link className='next' to='/animation2' title='Next' />
    </article>
  )
}

export default SwipeToExplore
