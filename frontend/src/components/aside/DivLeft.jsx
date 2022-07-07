import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,  faLinkedinIn,  faInstagram} from '@fortawesome/free-brands-svg-icons'

const DivLeft = () => {

  return (
    <div  className="w-full m-0 p-0 text-2xl text-white hidden 2xl:block ">
        <div className="fixed w-1/6 left-0 bottom-0">
            
            <div 
                className="text-xl md:flex md:flex-col md:items-center text-gray-800 mr-20">
                    <div className='border border-l-3 rotate-90 w-20 mb-16 border-gray-400'></div>
                        
                    <ul className="flex flex-col gap-8 items-center">
                        <a target="_blank" href="https://www.linkedin.com/in/tomas--aranda" ><li className="hover:text-cyan-500 hover:text-2xl ease-in-out duration-200"><FontAwesomeIcon icon={faLinkedinIn}/></li></a>
                        <a target="_blank" href="https://github.com/TomasAranda21"><li className="hover:text-cyan-500 hover:text-2xl ease-in-out duration-200"><FontAwesomeIcon icon={faGithub} className=""/></li></a>
                        <a target="_blank" href="https://www.instagram.com/tomas_aranda24/?utm_medium=copy_link"><li className="hover:text-cyan-500 hover:text-2xl ease-in-out duration-200"><FontAwesomeIcon icon={faInstagram}/></li></a>
                    </ul>

                <div className='border border-l-3 rotate-90 w-16 mt-16 mb-10 border-gray-400'></div>
            </div>
        </div>
    </div>
  )
}

export default DivLeft