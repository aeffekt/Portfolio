import Redes from './Redes'
import logoAA from '../assets/logo.png'
import '../styles/Header.css'


function Header() {
  return (    
    <section className='top-container' id='home'>
        <img loading='lazy' decoding='async' className="rounded-circle" src={ logoAA } alt="Imagen" />
        <div className='text-container'>
          <div>
            <h1>Agustin Arnaiz</h1>   
            <p>Analista de sistemas y  <strong>desarrollador de software Full Stack</strong>.</p>
            <p>Sobre todas las cosas mi visión está centrada en crear cosas nuevas.</p>
          </div>
          <Redes />
        </div>        
    </section>          
  )
}

export default Header
