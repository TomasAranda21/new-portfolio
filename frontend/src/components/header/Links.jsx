import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

const Links = ({nav, text, texto_links, onClick, className, ref }) => {

  return (
    <>
      <Link to={nav} activeClass="active" spy={true} smooth={true} offset={-80} duration={1300} isDynamic={true} delay={400} 
      onClick={onClick} ref={ref}
      className={`nav_link ${className}`}> 
          {text}
      </Link>

      <h3 className="block md:hidden capitalize">{texto_links}</h3>
    </>
    )
}

export default Links