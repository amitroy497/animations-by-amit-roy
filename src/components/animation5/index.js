import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const ButtonRippleHover = () => {
  const mouseMove = (e) => {
    const btn = document.querySelector('.btn')
    const x = e.pageX - btn.offsetLeft
    const y = e.pageY - btn.offsetTop
    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--y', y + 'px')
  }
  return (
    <article className='buttonRippleHoverWrapper'>
      <header>Water Droplets</header>
      <section>
        <div className='btn' onMouseMove={(e) => mouseMove(e)}>
          <span>Button</span>
        </div>
      </section>
      <Link className='prev' to='/animation4' title='Prev' />
      <Link className='next' to='/animation6' title='Next' />
    </article>
  )
}

export default ButtonRippleHover
