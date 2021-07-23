import React from 'react'

const SplitText = ({ copy }) => {
  return (
    <span aria-label={copy}>
      {copy.split('').map((char, index) => (
        <span aria-hidden='true' key={index}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default SplitText
