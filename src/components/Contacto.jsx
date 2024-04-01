import Redes from './Redes'
import '../styles/Contacto.css'
function Contacto() {
  return (
    <section className='contacto-container'  id="contacto">        
      <h1>Contacto</h1>
      <div className='text-container'>
        <div className='line'>
          <h2><strong>✉</strong></h2><span>arnaizagustin@gmail.com</span>
        </div>
        <div className='line'>
          <h2><strong>✆</strong></h2><span>+54 351 328-1199</span>
        </div>        
        <div className='line'>
          <h2><strong>🖧</strong></h2><span><Redes /></span>        
        </div>
        
      </div>      
    </section>
  )
}

export default Contacto
