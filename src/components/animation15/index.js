import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const RotatingCube = () => {
  return (
    <article className='rotatingCubeWrapper'>
      <header>Rotating Cube</header>
      <section>
        <div className='cube'>
          <div className='surface surface1'></div>
          <div className='surface surface2'></div>
          <div className='surface surface3'></div>
          <div className='surface surface4'></div>
        </div>
      </section>
      <Link className='prev' to='/animation14' title='Prev' />
      <Link className='next' to='/animation16' title='Next' />
    </article>
  )
}

export default RotatingCube
