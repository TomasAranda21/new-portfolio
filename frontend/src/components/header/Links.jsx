import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

const Links = ({nav, text, texto_links, onClick }) => {

  return (
    <>
    {/* <div className="flex flex-col items-center font_nav "> */}
      <Link to={nav} activeClass="active" spy={true} smooth={true} offset={-80} duration={1300} isDynamic={true} delay={400} 
      onClick={onClick}
      className="nav_link"> 
          {text}
      </Link>

      <h3 className="block md:hidden capitalize">{texto_links}</h3>
    {/* </div> */}
    </>
    )
}

export default Links