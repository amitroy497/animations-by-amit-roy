import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const ImageComparisonSlider = () => {
  return (
    <article className='imageComparisonWrapper'>
      <header>Image Comparison Slider</header>
      <section className='imgBox'>
        <textarea readOnly></textarea>
        <textarea readOnly></textarea>
      </section>
      <Link className='prev' to='/animation2' title='Prev' />
      <Link className='next' to='/animation4' title='Next' />
    </article>
  )
}

export default ImageComparisonSlider
