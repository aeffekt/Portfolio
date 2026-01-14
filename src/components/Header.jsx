import Redes from './Redes'
import logoAA from '../assets/agustin_arnaiz.jpg'
import '../styles/Header.css'


function Header() {
  return (
    <div className='new-block'>
      <section className='header-container'>
          <img decoding='async' className="rounded-circle" src={ logoAA } alt="Foto de Agustin Arnaiz" />
          <div className='text-container'>            
            <h1 className='distint-color'><strong>Agustín Arnaiz</strong></h1>   
            <p>Systems Analyst and <strong className='distint-color'>Backend Software Engineer</strong>.</p>
            <p>With proven experience in design, developing and deploying Software Systems.</p>
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
