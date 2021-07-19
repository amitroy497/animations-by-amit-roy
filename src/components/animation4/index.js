import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const WaterDrops = () => {
  return (
    <article className='dropsWrapper'>
      <header>Water Droplets</header>
      <section className='drops'>
        <div className='drop'></div>
        <div className='drop'></div>
        <div className='drop'></div>
        <div className='drop'></div>
      </section>
      <Link className='prev' to='/animation3' title='Prev' />
      <Link className='next' to='/animation5' title='Next' />
    </article>
  )
}

export default WaterDrops
