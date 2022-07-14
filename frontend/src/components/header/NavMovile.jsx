import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBriefcase, faCode , faEnvelope, faHome, faArrowRightFromBracket, faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import ButtonCV from '../buttons/Button'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'
import './Header.css'
import Links from './Links'
import LinksMovile from './LinksMovile'


const NavMovile = ({dark, isDark}) => {

    const [nav, setNav] = useState(false)


  return (

    <> 
        <div className="fixed top-0 w-full z-50 bg-verdeClaro2" >
            <nav className=" flex justify-between pt-4 p-3 items-center">

                <Links text='T/A' nav="home"/>

                <FontAwesomeIcon onClick={() => setNav(true)} icon={faBars} className="text-2xl" width="40"/>

                {nav && 
                    <div className="fixed bg-verdeClaro3 py-10 top-0 w-1/2 h-screen right-0 z-30 ">

                        <div className="px-10 flex justify-between items-center">
                            <button className="uppercase text-3xl font-bold flex justify-start" onClick={() => setNav(false)}>X</button>


                            <div className="">
                                {dark ? 

                                <button onClick={e => isDark(false)}><img src={sun} alt="" width="30"/></button> 

                                :

                                
                                <button onClick={e => isDark(true)}><img src={moon} alt="" width="30"/></button> 

                                }
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 items-center pt-20 text-xs">

                            <LinksMovile nav={"home"} text={"Inicio"} onClick={() => setNav(false)} icon={faHome}/>
                            <LinksMovile nav={"portfolio"} text={"Portfolio"} onClick={() => setNav(false)} icon={faBriefcase}/>
                            <LinksMovile nav={"skills"} text={"Skills"} onClick={() => setNav(false)} icon={faCode}/>
                            <LinksMovile nav={"contacto"} text={"Contacto"} onClick={() => setNav(false)} icon={faEnvelope}/>

                            <div className="px-5">
                                <a target="_blank" href="https://drive.google.com/file/d/1YVsHxjlzsqtcL1OiGve8F7mkfVRIKHmS/view">
                                    <ButtonCV text="descargar cv"/>
                                </a>
                            </div>

                        </div>
                    </div>
                }

            </nav>

        </div>
    

    
    </>


  )


}

export default NavMovile