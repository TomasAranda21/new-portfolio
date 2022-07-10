import React, { useEffect, useState } from 'react'
import ButtonCV from '../buttons/Button'
import './Header.css'
import Links from './Links'
import NavDesktop from './NavDesktop'
import NavMovile from './NavMovile'


const Header = () => {

    const [isMovil, setIsMovil] = useState(false)


    useEffect(() => {

        if(window.screen.width <= 768) {

            setIsMovil(true)

        }


    }, [])

  return (


    <header className="header_container lg:h-screen bg-verdeClaro2">

        {!isMovil ?

            <NavDesktop/>

        : <NavMovile/>

    
        }




        <section className="flex justify-center text-gray-900 pb-44 lg:pb-20">

            <div className="flex flex-col gap-3 pt-20 lg:pt-32  ">
                <p className="text-2xl lg:text-4xl font-semibold text-center lg:text-left">Hola!👋🏻  Me llamo</p>
                <h1 className="xl:text-11xl text-5xl font-bold">Tomas Aranda.</h1>

                <div className="relative pb-20 lg:left-1/2 w-full">

                    <p className="borderText spanText">Soy Frontend Developer.</p>
                    <p className="wave spanText">Soy Frontend Developer.</p>

                </div>
            </div>

        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f9fafb" fillOpacity="1" d="M0,0L48,37.3C96,75,192,149,288,197.3C384,245,480,267,576,266.7C672,267,768,245,864,224C960,203,1056,181,1152,192C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

    </header>
        
        
  )
}

export default Header