import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'
import splitVideo from '../../assets/videos/splitVideo.mp4'

const SplitVideo = () => {
  window.addEventListener('scroll', function () {
    let side1 = document.getElementById('side1')
    let side2 = document.getElementById('side2')

    side1.style.left = -window.pageYOffset + 'px'
    side2.style.left = window.pageYOffset + 'px'
  })
  return (
    <article className='splitVideoWrapper' id='scrollArticle'>
      <section>
        <div className='side' id='side1'>
          <video src={splitVideo} type='video/mp4' autoPlay loop muted />
        </div>
        <div className='side' id='side2'>
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
