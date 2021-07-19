import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const SkillsRatingBar = () => {
  return (
    <article className='skillsRatingWrapper'>
      <header>Skills Rating Bar</header>
      <section className='container'>
        <h2>5 Star Skills Rating Bar</h2>
        <div className='skills'>
          <h3 className='name'>Html</h3>
          <div className='rating'>
            <input type='radio' name='html' />
            <input type='radio' name='html' />
            <input type='radio' name='html' />
            <input type='radio' name='html' />
            <input type='radio' name='html' />
            <input type='radio' name='html' />
            <input type='radio' name='html' />
            <input type='radio' name='html' />
            <input type='radio' name='html' />
            <input type='radio' name='html' />
          </div>
        </div>
        <div className='skills'>
          <h3 className='name'>CSS</h3>
          <div className='rating'>
            <input type='radio' name='css' />
            <input type='radio' name='css' />
            <input type='radio' name='css' />
            <input type='radio' name='css' />
            <input type='radio' name='css' />
            <input type='radio' name='css' />
            <input type='radio' name='css' />
            <input type='radio' name='css' />
            <input type='radio' name='css' />
            <input type='radio' name='css' />
          </div>
        </div>
        <div className='skills'>
          <h3 className='name'>Javascript</h3>
          <div className='rating'>
            <input type='radio' name='js' />
            <input type='radio' name='js' />
            <input type='radio' name='js' />
            <input type='radio' name='js' />
            <input type='radio' name='js' />
            <input type='radio' name='js' />
            <input type='radio' name='js' />
            <input type='radio' name='js' />
            <input type='radio' name='js' />
            <input type='radio' name='js' />
          </div>
        </div>
        <div className='skills'>
          <h3 className='name'>Photoshop</h3>
          <div className='rating'>
            <input type='radio' name='photoshop' />
            <input type='radio' name='photoshop' />
            <input type='radio' name='photoshop' />
            <input type='radio' name='photoshop' />
            <input type='radio' name='photoshop' />
            <input type='radio' name='photoshop' />
            <input type='radio' name='photoshop' />
            <input type='radio' name='photoshop' />
            <input type='radio' name='photoshop' />
            <input type='radio' name='photoshop' />
          </div>
        </div>
        <div className='skills'>
          <h3 className='name'>Illustrator</h3>
          <div className='rating'>
            <input type='radio' name='illustrator' />
            <input type='radio' name='illustrator' />
            <input type='radio' name='illustrator' />
            <input type='radio' name='illustrator' />
            <input type='radio' name='illustrator' />
            <input type='radio' name='illustrator' />
            <input type='radio' name='illustrator' />
            <input type='radio' name='illustrator' />
            <input type='radio' name='illustrator' />
            <input type='radio' name='illustrator' />
          </div>
        </div>
      </section>
      <Link className='prev' to='/animation11' title='Prev' />
      <Link className='next' to='/animation13' title='Next' />
    </article>
  )
}

export default SkillsRatingBar
