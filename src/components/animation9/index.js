import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const NeonButton = () => {
  return (
    <article className='neonButtonWrapper'>
      <header>Neon Button Animation</header>
      <section>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Neon Button
        </div>
      </section>
      <Link className='prev' to='/animation8' title='Prev' />
      <Link className='next' to='/animation10' title='Next' />
    </article>
  )
}

export default NeonButton
