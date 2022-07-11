import React, { useState } from 'react'
import ButtonCV from '../buttons/Button'
import './Header.css'
import Links from './Links'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'

const NavDesktop = ({dark, isDark}) => {


  return (
    <>
        <div className="fixed w-full px-7 2xl:px-0 z-50 bg-verdeClaro2">
            <nav className="2xl:w-2/3 w-full flex mx-auto justify-between py-5 items-center font-fontSecundaria ">

                <Links text='T/A' nav="home"/>


                    <div>
                        <Links text='Inicio' nav="home"/>
                        <Links text='Portfolio' nav="portfolio"/>
                        <Links text='Skills' nav="skills"/>
                        <Links text='Contacto' nav="contacto"/>

                    </div>

                    <div className="flex items-center gap-10">


                        {/* <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                        </label> */}
                        <div className="">
                            {dark ? 

                            <button onClick={e => isDark(false)}><img src={sun} alt="" width="30"/></button> 

                            :

                            
                            <button onClick={e => isDark(true)}><img src={moon} alt="" width="30"/></button> 

                            }
                        </div>
                        
                        <div className="w-44 relative h-14">
                            <div className="absolute ">

                                <ButtonCV text="descargar cv"/>
                                
                            </div>
                        </div>
                </div>

            </nav>

        </div>
    </>
  )
}

export default NavDesktop