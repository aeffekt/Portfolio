import React from 'react'
import '../styles/Navbar.css'


function Navbar() {
  return (
    <div className='navbar-container'>        
        <ul className='ul-navbar'>          
          <a href="#home"><li>Home</li></a>
          <a href="#proyectos"><li>Proyectos</li></a>
          <a href="#experiencia"><li>Experiencia</li></a>
          <a href="#acerca-de-mi"><li>Sobre Mi</li></a>
          <a href="#contacto"><li>Contacto</li></a>          
        </ul>
    </div>
  )
}

export default Navbar
