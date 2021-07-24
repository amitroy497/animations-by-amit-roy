import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const ColorfulRotatingSquares = () => {
  return (
    <article className='colorfulRotatingSquaresWrapper'>
      <header>Colorful Rotating Squares</header>
      <section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <Link className='prev' to='/animation22' title='Prev' />
      <Link className='next' to='/animation24' title='Next' />
    </article>
  )
}

export default ColorfulRotatingSquares
