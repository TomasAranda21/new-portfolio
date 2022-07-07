import React from 'react'

const CardsSkills = ({text, children}) => {

  return (

    <div className=" shadow-xl rounded-md text-gray-800 px-8 py-3 border">
        <div className="text-2xl">
            <h2>{text}</h2>
        </div>

        <div 
        className="grid justify-center grid-cols-2 gap-8 my-10">

            {children}

        </div>
    </div>

  )
}

export default CardsSkills