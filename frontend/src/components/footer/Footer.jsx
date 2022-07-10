import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,  faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {



  return (


        <footer  className="bg-verdeClaro1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path fill="#f9fafb" fillOpacity="1" d="M0,96L60,106.7C120,117,240,139,360,144C480,149,600,139,720,122.7C840,107,960,85,1080,85.3C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>

            <div className="pb-5"
            >
                <div className="flex justify-center 2xl:hidden pb-3">
                    <ul className="flex text-3xl text-gray-800 gap-10 items-center">
                        <a target="_blank" href="https://www.linkedin.com/in/tomas--aranda"><li className="hover:text-cyan-500"><FontAwesomeIcon icon={faLinkedinIn}/></li></a>
                        <a target="_blank" href="https://github.com/TomasAranda21"><li className="hover:text-cyan-500"><FontAwesomeIcon icon={faGithub} className=""/></li></a>
                        <a target="_blank" href="https://www.instagram.com/tomas_aranda24/?utm_medium=copy_link"><li className="hover:text-cyan-500"><FontAwesomeIcon icon={faInstagram}/></li></a>
                    </ul>
                </div>

                <div className="text-center flex flex-col mb-5 justify-end gap-2 text-gray-800">
                    <h2>Diseñado y contruido por <span className="hover:text-sky-400 duration-200 ease-linear">Tomás Aranda</span></h2>
                    <p>&copy; copyright 2022 Todos los derechos reservados</p>
                </div>
                
            </div>
            
                
        </footer>
  )
}

export default Footer