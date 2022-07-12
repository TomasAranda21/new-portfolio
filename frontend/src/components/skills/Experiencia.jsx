import React from 'react'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'



const Experiencia = ({date, title, description, client, link}) => {
  return (

    <div className="container_card ">
        
        <div className="">
            <img src="https://i.pinimg.com/564x/a7/46/f7/a746f74e09c6684cf3542650e5bb8c4d.jpg" alt="" width="250" 
            className="rounded-md shadow-lg shadow-gray-900 border "/>
        </div>

        <div className="container_card_info rounded-md bg-gradient-to-r from-naraja to-amarillo">
            
            <div className="border p-2 flex flex-col gap-2 border-red-500">

                <h3 className="text-center uppercase border font-semibold border-red-500 border-x-0 border-t-0">"{title}"</h3>
                <p>{description}</p>

                <p><span className="font-bold">Cliente: </span>{client}</p>
                <p><span className="font-bold">Fecha:  </span>{date}</p>

                <a href={link} target="_blank" className="text-center cursor-pointer px-3 py-1 border-gray-900
                hover:bg-verdeClaro2 duration-200 border rounded-sm"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/> Link de la app </a>

            </div>
        
        </div>

    </div>

  )
}

export default Experiencia