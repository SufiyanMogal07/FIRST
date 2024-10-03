import React from 'react'
import { HashLink } from 'react-router-hash-link'


function Header() {
  return (
   <nav>
    <h1>TechyStar.</h1>
    <div>
        <HashLink to={"/"}>Home</HashLink>
        <HashLink to={"/contact"}>Contact</HashLink>
        <HashLink to={"/#about"} smooth>About</HashLink>
        <HashLink to={"/#brands"} smooth>Brands</HashLink>
        <HashLink to={"/services"} smooth>Services</HashLink>
    </div>
   </nav>
  )
}

export default Header
