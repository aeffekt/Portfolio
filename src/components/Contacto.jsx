import Redes from './Redes'
import '../styles/Contacto.css'
function Contacto() {
  return (
    <div className='new-block'   id="contacto">
      <h2 className='title-color'>&#9998;  Contacto</h2>
      <section className='contacto-container'>              
        <div className='text-container'>
          <div className='line'>
            <h2 className='distint-color'>✉</h2><span>arnaizagustin@gmail.com</span>                
          </div>        
          <div className='line'>
            <h2 className='distint-color'>🖧</h2><span><Redes /></span>        
          </div>        
        </div>      
    </section>
    </div>
    
  )
}

export default Contacto
