import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const OxygenHoverEffect = () => {
  return (
    <article className='oxygenHoverWrapper'>
      <header>Oxygen Hover Effect</header>
      <section>
        <h2>
          <span>d</span>
          <span>o</span>
          <span>nate</span>
          <br />
          <i></i>
        </h2>
      </section>
      <Link className='prev' to='/animation12' title='Prev' />
      <Link className='next' to='/animation14' title='Next' />
    </article>
  )
}

export default OxygenHoverEffect
