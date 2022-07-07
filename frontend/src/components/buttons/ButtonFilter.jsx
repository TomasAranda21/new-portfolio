import React from 'react'

const ButtonFilter = ({text, onChange}) => {
  return (

    <div className="button_filter">
        <button onChange={onChange}>{text}</button>

    </div>

  )
}

export default ButtonFilter