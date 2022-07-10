import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBriefcase, faCode , faEnvelope, faHome, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import ButtonCV from '../buttons/Button'
import './Header.css'
import Links from './Links'


const NavMovile = () => {

  return (

    <> 
        <div className="relative top-0">
            <nav className="flex justify-between pt-8 p-3 items-center">

                <Links text='T/A'/>

                <FontAwesomeIcon icon={faBars} className="text-2xl" width="40"/>

                


                {/* <div className="fixed bg-verdeClaro4 p-20 top-0 w-1/3 h-screen right-0 z-30 ">
                    <div className="flex flex-col gap-10 items-center pt-20">
                        <a href="">Inicio</a>
                        <a href="">Portfolio</a>
                        <a href="">Skills</a>
                        <a href="">Contacto</a>

                    </div>
                </div> */}

            </nav>

        </div>
    

    
    </>


  )


}

export default NavMovile