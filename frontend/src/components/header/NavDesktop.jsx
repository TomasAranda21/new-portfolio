import React from 'react'
import ButtonCV from '../buttons/Button'
import './Header.css'
import Links from './Links'

const NavDesktop = () => {

  return (
    <>
        <nav className="w-2/3 flex mx-auto justify-between pt-8 items-center font-fontSecundaria">

        <Links text='T/A'/>


            <div>
                <Links text='Inicio'/>
                <Links text='Portfolio'/>
                <Links text='Skills'/>
                <Links text='Contacto'/>

            </div>

            <div className="flex items-center gap-10">


                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
                
                <div className="w-44 relative h-14">
                    <div className="absolute ">

                        <ButtonCV text="descargar cv"/>
                        
                    </div>
                </div>
        </div>
        </nav>
    </>
  )
}

export default NavDesktop