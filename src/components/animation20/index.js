import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const GooeyEffect = () => {
  return (
    <article className='gooeyEffectWrapper'>
      <header>Gooey Effect</header>
      <section>
        <div className='ball ball1'></div>
        <div className='ball ball2'></div>
      </section>
      <Link className='prev' to='/animation19' title='Prev' />
      <Link className='next' to='/animation21' title='Next' />
    </article>
  )
}

export default GooeyEffect
