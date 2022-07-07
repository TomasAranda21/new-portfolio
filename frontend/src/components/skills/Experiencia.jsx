import React from 'react'
import './skills.css'

const Experiencia = ({date, title, description, client, link}) => {
  return (

    <div className="container_card ">
        
        <div className="">
            <img src="https://i.pinimg.com/564x/a7/46/f7/a746f74e09c6684cf3542650e5bb8c4d.jpg" alt="" width="250" 
            className="rounded-md shadow-lg shadow-gray-900 border"/>
        </div>

        <div className="container_card_info">
            
            <div className="border p-2 flex flex-col gap-3">

                <h3 className="text-center uppercase border border-x-0 border-t-0">{title}</h3>
                <p>{description}</p>

                <p><span>Cliente: </span>{client}</p>
                <p><span>Fecha:  </span>{date}</p>

                <a href={link} className="text-center cursor-pointer">Link de la app</a>

            </div>
        
        </div>

    </div>

  )
}

export default Experiencia