import React from 'react'

const ButtonAbout = ({text}) => {
  return (

      <button className="button_about flex items-center">
          <span>{text}</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5" />
              <polyline points="8 1 12 5 8 9" />
          </svg>
      </button>

  )
}

export default ButtonAbout