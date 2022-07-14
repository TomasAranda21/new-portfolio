import React from 'react'
import './cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


const CardsPortfolio = ({img, name, description, linkWeb, linkGit}) => {
  return (

    <div className="relative overflow-hidden rounded-md shadow-xl border-2 border-sky-500 duration-300 hover:shadow-sky-200">

    <div className="cards ">
  
        <img className="" src={img} alt="" width={300}/>

        <div className="info_container">
            <h1 className="uppercase underline underline-offset-2">{name}</h1>
            <p className="text-gray-200 font-normal">{description}</p>

            <div className="flex gap-4 items-center justify-center text-gray-300">
              <a className="hover:text-red-300" href={linkGit} target="_blank" > <FontAwesomeIcon icon={faGithub} className=""/> </a>
              <a className="hover:text-naraja duration-300" href={linkWeb} target="_blank" > <FontAwesomeIcon icon={faArrowUpRightFromSquare}/> Link web</a>
            </div>
        </div>

    </div>

    </div>

  )
}

export default CardsPortfolio