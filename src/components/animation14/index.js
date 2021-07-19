import React, { useState } from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'
// import VanillaTilt from 'vanilla-tilt'

const GlassMorphismCalculator = () => {
  const [inputValue, setInputValue] = useState()

  // const tilt = () => {
  //   VanillaTilt.init(document.querySelector('section'), {
  //     max: 25,
  //     speed: 400,
  //   })

  //   VanillaTilt.init(document.querySelectorAll('section'))
  // }
  return (
    <article className='glassMorphCalcWrapper'>
      <header>Glass Morphism Calculator</header>
      <section>
        <form className='calculator' name='calc'>
          <input
            type='text'
            readonly
            className='value'
            name='txt'
            value={inputValue}
          />
          <span className='num clear' onClick={() => setInputValue('')}>
            c
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '/'))}
          >
            /
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '*'))}
          >
            *
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '7'))}
          >
            7
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '8'))}
          >
            8
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '9'))}
          >
            9
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '-'))}
          >
            -
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '4'))}
          >
            4
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '5'))}
          >
            5
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '6'))}
          >
            6
          </span>
          <span
            className='num plus'
            onClick={() => setInputValue((document.calc.txt.value += '+'))}
          >
            +
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '1'))}
          >
            1
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '2'))}
          >
            2
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '3'))}
          >
            3
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '0'))}
          >
            0
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '00'))}
          >
            00
          </span>
          <span
            className='num'
            onClick={() => setInputValue((document.calc.txt.value += '.'))}
          >
            .
          </span>
          <span
            className='num equal'
            onClick={() =>
              setInputValue(
                // eslint-disable-next-line no-eval
                (document.calc.txt.value = eval(document.calc.txt.value))
              )
            }
          >
            =
          </span>
        </form>
      </section>
      <Link className='prev' to='/animation13' title='Prev' />
      <Link className='next' to='/animation15' title='Next' />
    </article>
  )
}

export default GlassMorphismCalculator
