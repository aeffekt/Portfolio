import Redes from './Redes'
import '../styles/Contacto.css'
function Contacto() {
  return (
    <section className='contacto-container'  id="contacto">        
      <h2 className='title-color'>Contacto</h2>
      <div className='text-container'>
        <div className='line'>
          <h2 className='distint-color'>✉</h2><span>arnaizagustin@gmail.com</span>                
        </div>        
        <div className='line'>
          <h2 className='distint-color'>🖧</h2><span><Redes /></span>        
        </div>
        
      </div>      
    </section>
  )
}

export default Contacto
