import React from 'react'
import './cards.css'

const CardsPortfolio = ({img, name, description, linkWeb, linkGit}) => {
  return (

    <div className="relative overflow-hidden rounded-md shadow-xl ">

    <div className="cards">
  
        <img className=""
        
        src={img} alt="" width={300}/>

        <div className="info_container">
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Link</p>
            <a href={linkWeb} target="_blank" > Link web</a>
            <a href={linkGit} target="_blank" > Codigo </a>
        </div>

    </div>

    </div>

  )
}

export default CardsPortfolio