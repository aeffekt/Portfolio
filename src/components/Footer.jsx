import React from 'react'
import '../styles/Footer.css'
import Redes from './Redes'
import aalogo from '../assets/icon.png'

function Footer() {
  return (
    <footer className='footer-container'>
      <img src={aalogo} alt="Agustin Arnaiz Logo" className='logo left'/>
      <div className='title center'>
        <h5 className='brand'>Agustín Arnaiz</h5>
        <small>© 2025</small>        
      </div>      
      <span className='redes right'><Redes /></span>
    </footer>
  )
}

export default Footer
