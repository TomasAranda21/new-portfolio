import React from 'react'
import ButtonCV from '../buttons/Button'
import './Header.css'
import Links from './Links'


const Header = () => {

  return (


    <header className="header_container h-screen  bg-verdeClaro2">

        <nav className="w-2/3 mx-auto flex justify-between pt-8 items-center font-fontSecundaria">

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


        <section className="flex justify-center text-gray-900">

            <div className="flex flex-col gap-3 pt-32">
                <p className="text-3xl ml-10 font-semibold">Hola! Me llamo</p>
                <h1 className="text-11xl font-bold">Tomas Aranda.</h1>

                <p className="text-4xl text-right mr-4 font-semibold">Soy Frontend Developer.</p>
            </div>

        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f9fafb" fillOpacity="1" d="M0,0L48,37.3C96,75,192,149,288,197.3C384,245,480,267,576,266.7C672,267,768,245,864,224C960,203,1056,181,1152,192C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

    </header>
        
        
  )
}

export default Header