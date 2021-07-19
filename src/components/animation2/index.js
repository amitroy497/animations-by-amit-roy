import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

const House = () => {
  return (
    <article className='houseWrapper'>
      <header>House</header>
      <section className='house'>
        <div className='main'>
          <div className='windows_right' />
          <div className='windows_left' />
          <div className='line adjust' />
          <div className='roof' />
          <div className='front'>
            <div className='line' />
            <div className='door' />
          </div>
          <div className='side'>
            <div className='line' />
            <div className='windows' />
          </div>
          <div className='tree' />
          <div className='tree tree2' />
        </div>
      </section>
      <Link className='prev' to='/' title='Prev' />
      <Link className='next' to='/animation3' title='Next' />
    </article>
  )
}

export default House
