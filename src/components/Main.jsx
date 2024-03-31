import React from 'react'
import '../styles/Main.css'
import Home from '../components/Home'
import Experiencias from './Experiencias'
import Proyectos from '../components/Proyectos'
import Acerca from '../components/Acerca'
import Contacto from '../components/Contacto'


function Main() {
  return (
    <div className='main-container' id='main'>      
      <Home />
      <h1 id="proyectos">Proyectos</h1>
      <Proyectos />
      <h1 id="experiencia">Experiencia</h1>
      <Experiencias />
      <h1 id="acerca-de-mi">Acerca de mí</h1>
      <Acerca />
      <h1 id="contacto">Contacto</h1>
      <Contacto />
    </div>
  )
}

export default Main
