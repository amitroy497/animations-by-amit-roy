import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'
import carWheelLeft from '../../assets/images/car_wheel_left.png'
import carWheelRight from '../../assets/images/car_wheel_right.png'
import sound from '../../assets/music/sound.mp3'

const LamborginiMovingJumping = () => {
  return (
    <article className='carMovingJumpingWrapper'>
      <header>Car Moving and Jumping Animation</header>
      <section>
        <div class='trees' />
        <div class='track' />
        <div class='car'>
          <div class='wheel wheel1'>
            <audio autoPlay hidden loop>
              <source src={sound} type='audio/mp3' />
            </audio>
            <img src={carWheelLeft} alt='Left Wheel' />
          </div>
          <div class='wheel wheel2'>
            <img src={carWheelRight} alt='Right Wheel' />
          </div>
        </div>
      </section>
      <Link className='prev' to='/animation17' title='Prev' />
      <Link className='next' to='/animation19' title='Next' />
    </article>
  )
}

export default LamborginiMovingJumping
