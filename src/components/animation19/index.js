import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const WaterWaveText = () => {
  return (
    <article className='waterTextWrapper'>
      <header>Wave Animation Text</header>
      <section>
        <h2>Water</h2>
        <h2>Water</h2>
        <h2>Water</h2>
        <h2>Water</h2>
      </section>
      <Link className='prev' to='/animation18' title='Prev' />
      <Link className='next' to='/animation20' title='Next' />
    </article>
  )
}

export default WaterWaveText
