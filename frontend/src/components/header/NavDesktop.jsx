import React from 'react'
import ButtonCV from '../buttons/Button'
import './Header.css'
import Links from './Links'
import { useInView } from 'react-intersection-observer'



const NavDesktop = ({dark, isDark}) => {

    const {ref: refHome, inView: homeView } = useInView({triggerOnce: true});


  return (
    <>
    <div ref={refHome}>
        <div 
        className={`${homeView ? "fixed top-0  w-full px-7 2xl:px-0 z-50 bg-verdeClaro2 delay-1000 duration-700 ease-in-out" 
        : " delay-500 duration-700 ease-in-out nav_desktop_hidden fixed w-full px-7 2xl:px-0 z-50 bg-verdeClaro2"}`} >

            <nav 
            className="2xl:w-2/3 w-full flex mx-auto justify-between py-5 items-center font-fontSecundaria">

                

                <Links text={'T/A'} className="font-bold text-xl" nav="home"/>
                


                    <div>
                        <Links text='Inicio' nav="home"/>

                        <Links text='Portfolio' nav="portfolio"/>
                        <Links text='Skills' nav="skills"/>
                        <Links text='Contacto' nav="contacto"/>
                    </div>

                    <div className="flex items-center gap-10">

{/* 
                        <div className="">
                            {dark ? 

                            <button onClick={e => isDark(false)}><img src={sun} alt="" width="30"/></button> 

                            :

                            
                            <button onClick={e => isDark(true)}><img src={moon} alt="" width="30"/></button> 

                            }
                        </div> */}
                        
                        <div className="w-44 relative h-14">
                            <div className="absolute ">

                            <a target="_blank" href="https://drive.google.com/file/d/1YVsHxjlzsqtcL1OiGve8F7mkfVRIKHmS/view">
                                    <ButtonCV text="descargar cv"/>
                            </a>
                                
                            </div>
                        </div>
                </div>

            </nav>

        </div>

    </div>
    </>
  )
}

export default NavDesktop