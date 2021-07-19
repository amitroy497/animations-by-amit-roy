import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const LoaderAnimation = () => {
  return (
    <article className='loaderAnimationWrapper'>
      <header>Loader Animation</header>
      <section>
        <div class='loader'>
          <span></span>
        </div>
      </section>
      <Link className='prev' to='/animation9' title='Prev' />
      <Link className='next' to='/animation11' title='Next' />
    </article>
  )
}

export default LoaderAnimation
