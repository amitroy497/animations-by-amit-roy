import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const EndlessRoad = () => {
  return (
    <article className='endlessRoadWrapper'>
      <header>Endless Road</header>
      <section>
        <div className='infinite'>
          <div className='shadow'></div>
        </div>
        <div className='box'>
          <div className='square'></div>
        </div>
      </section>
      <Link className='prev' to='/animation15' title='Prev' />
      <Link className='next' to='/animation17' title='Next' />
    </article>
  )
}

export default EndlessRoad
