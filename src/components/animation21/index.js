import React, { useEffect, useRef } from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'
import SplitText from './splitText'

const AnimatedCircleMouseoverTextEffect = () => {
  const textRef = useRef()
  const alignTransformElement = () => {
    const element = document.querySelectorAll('span')
    for (let i = 0; i < element.length; i++) {
      element[i].style.transform = 'rotate(' + i * 18 + 'deg)'
    }
  }

  const mouseMove = (e) => {
    textRef.current.style.left = e.pageX + 'px'
    textRef.current.style.top = e.pageY + 'px'
  }

  useEffect(() => {
    alignTransformElement()

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  return (
    <article className='animatedCircleMouseOverTextEffectWrapper'>
      <header>Animated Circle Text Effect on Mouse Over</header>
      <section>
        <h2 aria-label='Circle-Text-Effects' ref={textRef}>
          <SplitText copy='Circle-Text-Effects' />
        </h2>
      </section>
      <Link className='prev' to='/animation20' title='Prev' />
      <Link className='next' to='/animation22' title='Next' />
    </article>
  )
}

export default AnimatedCircleMouseoverTextEffect
