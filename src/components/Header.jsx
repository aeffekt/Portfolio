import Redes from './Redes'
import logoAA from '../assets/logo.png'
import '../styles/Header.css'


function Header() {
  return (
    <div className='new-block'  id='home'>
      <section className='header-container'>
          <img loading='lazy' decoding='async' className="rounded-circle" src={ logoAA } alt="Imagen" />
          <div className='text-container'>            
            <h1 className='distint-color'><strong>Agustín Arnaiz</strong></h1>   
            <p>Systems Analyst and <strong className='distint-color'>Full Stack Software Developer</strong>.</p>
            <p>
              <i>"I am highly driven by the process of <strong>creating new things.</strong></i>"
            </p>            
            <Redes />
          </div>        
      </section>          
    </div>
  )
}

export default Header
