import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'
import Particles from '../../assets/videos/particles.mp4'

const TextDistortion = () => {
  return (
    <article className='textDistortionWrapper'>
      <header>Particles Distortion</header>
      <section>
        <video src={Particles} muted autoPlay></video>
        <h2>
          <span>P</span>articles Di<span>st</span>ortion
        </h2>
      </section>
      <Link className='prev' to='/animation15' title='Prev' />
      <Link className='next' to='/animation17' title='Next' />
    </article>
  )
}

export default TextDistortion
