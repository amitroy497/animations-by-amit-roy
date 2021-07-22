import React, { useEffect, useRef } from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'
import splitVideo from '../../assets/videos/splitVideo.mp4'

const SplitVideo = () => {
  const sideRef1 = useRef()
  const sideRef2 = useRef()

  const handleScroll = () => {
    sideRef1.current.style.left = -window.pageYOffset + 'px'
    sideRef2.current.style.left = window.pageYOffset + 'px'
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <article className='splitVideoWrapper' id='scrollArticle'>
      <section>
        <div className='side' id='side1' ref={sideRef1}>
          <video src={splitVideo} type='video/mp4' autoPlay loop muted />
        </div>
        <div className='side' id='side2' ref={sideRef2}>
          <video src={splitVideo} type='video/mp4' autoPlay loop muted />
        </div>
      </section>
      <div class='content'>
        <span>
          <h2>Split Video on Page Scroll</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas
            delectus, in non quia sunt repellendus possimus maxime. Voluptas a
            aspernatur enim, dolor incidunt necessitatibus temporibus corrupti
            ad vel perspiciatis! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eaque suscipit totam perferendis facere magni
            assumenda sed, minima alias aliquam a possimus quisquam similique
            incidunt unde rem? Sed natus asperiores commodi? Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Veritatis, animi officiis
            sapiente architecto ipsam temporibus magnam libero porro
            necessitatibus eligendi sed voluptatibus earum harum itaque
            voluptatum distinctio tenetur incidunt laboriosam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Itaque quas delectus, in non
            quia sunt repellendus possimus maxime. Voluptas a aspernatur enim,
            dolor incidunt necessitatibus temporibus corrupti ad vel
            perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eaque suscipit totam perferendis facere magni assumenda sed,
            minima alias aliquam a possimus quisquam similique incidunt unde
            rem? Sed natus asperiores commodi? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Veritatis, animi officiis sapiente
            architecto ipsam temporibus magnam libero porro necessitatibus
            eligendi sed voluptatibus earum harum itaque voluptatum distinctio
            tenetur incidunt laboriosam.
          </p>
        </span>
      </div>
      <Link className='prev' to='/animation10' title='Prev' />
      <Link className='next' to='/animation12' title='Next' />
    </article>
  )
}

export default SplitVideo
