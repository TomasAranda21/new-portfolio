import React from 'react'
import './button.css'

const Button = ({text, type}) => {
  return (

    <button className="button_principal 
    border uppercase rounded-sm border-l-4 p-3 border-b-4 border-azul2 hover:border-slate-200  w-full
    text-rojoOscuro font-bold
    hover:text-gray-900" 
    type={type}
    >{text}</button>

  )
}

export default Button