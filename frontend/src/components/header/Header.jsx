import React from 'react'
import ButtonCV from '../buttons/buttonCV'
import './Header.css'
import Links from './Links'


const Header = () => {

  return (


    <header className="header_container h-screen">

        <nav className="w-2/3 mx-auto flex justify-between pt-8 items-center font-fontSecundaria">

            <Links text='T/A'/>


            <div>
                <Links text='Inicio'/>
                <Links text='Portfolio'/>
                <Links text='Skills'/>
                <Links text='Contacto'/>

            </div>

            <ButtonCV text="descargar cv"/>

        </nav>


        <section className="flex justify-center text-rojoOscuro">

            <div className="flex flex-col gap-3 pt-32">
                <p>Hola! Me llamo</p>
                <h1 className="text-8xl font-semibold">Tomas Aranda.</h1>

                <p className="text-2xl">Soy Frontend Developer.</p>
            </div>

        </section>



    </header>
        
        
  )
}

export default Header