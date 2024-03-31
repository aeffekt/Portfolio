import React from 'react'
import logoAA from '../assets/logo.png'
import '../styles/Home.css'
import logoGit from '../assets/github.svg'
import logoLinkedIn from '../assets/linkedin.svg'
import logoCv from '../assets/cv.svg'

function Home() {
  return (    
    <section className='top-container'>
        <img loading='lazy' decoding='async' className="rounded-circle" src={ logoAA } alt="Imagen" />
        <div className='text-container'>
          <div>
            <h1 id='home'>Agustin Arnaiz</h1>   
            <p>Analista de sistemas y desarrollador de software Full Stack.</p>
            <p>Sobre todas las cosas mi visión está centrada en crear cosas nuevas.</p>
          </div>
          <a href="https://www.linkedin.com/in/arnaizagustin/" target="_blank">
            <i title='Visitar LinkedIn'>
              <img className='icon' src={logoLinkedIn}></img>
            </i></a>
          <a href="https://github.com/aeffekt" target="_blank">
            <i title='Visitar GitHUB'>
              <img className='icon' src={logoGit} alt="" />
            </i></a>
          <a href="https://www.canva.com/design/DAF9tgNgwAQ/i-W-QlEhDnYA1fkfYvDKWg/view?utm_content=DAF9tgNgwAQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank">
            <i title='Abrir CV'>
              <img className='icon' src={logoCv} alt="" />
            </i>
          </a>          
        </div>        
    </section>          
  )
}

export default Home
