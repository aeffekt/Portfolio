import React from 'react'
import foto_perfil from '../assets/foto_perfil.jpg'

function Home() {
  return (    
    <section className='top-container'>
        <img class="rounded-circle" src={ foto_perfil } alt="Imagen" />
        <h1>Agustin Arnaiz</h1>
        <h4>Systems Analyst  &  Software Developer</h4>
    </section>          
  )
}

export default Home
