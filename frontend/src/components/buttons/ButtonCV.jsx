import React from 'react'
import './button.css'

const ButtonCV = ({text, type}) => {
  return (

    <button className="button_principal border uppercase rounded-sm border-l-4 p-3 border-b-4 border-teal-500 hover:border-slate-200  
    text-teal-400 font-bold
    hover:text-gray-900" 
    type={type}
    >{text}</button>

  )
}

export default ButtonCV