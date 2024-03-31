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
      <Proyectos />      
      <Experiencias />      
      <Acerca />      
      <Contacto />
    </div>
  )
}

export default Main
