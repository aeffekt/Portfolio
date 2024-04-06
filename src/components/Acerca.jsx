import '../styles/Acerca.css'

function Acerca() {
  return (
    <div className='new-block' id="acerca-de-mi">
      <h2 className='title-color'>&#9755; About me</h2>
      <section className='acerca-container'>      
        <article className='text-container'>
          <p>
            My name is Agustín Arnaiz and I am a <strong>Systems Developer</strong>.
            <strong className='distint-color'> My first steps as a programmer were in "C" and "Assembler"</strong> studying
            Electronics Engineering at the <strong>UTN FRC</strong> in the year 2000.            
          </p>
          <p>
            With my work, I have brought significant changes to the company for which I work, as well as its clients. 
            <strong className='distint-color'> I managed to integrate new technologies, and with it, new possibilities. </strong>
            How to streamline the purchases processes <strong><i>(GEST2020)</i></strong>  and improve it's after-sales customer service<strong> <i>(TECSEG)</i></strong>.
          </p>    
          <p>
            In addition, the <strong><i>"XME Telemetry"</i></strong>  system <strong className='distint-color'>  
            allowed a new product to be marketed to customers, </strong>
            By providing the possibility of commanding high power transmitters in remote locations, and with this, being able <strong className='distint-color'>to provide
            a better assistance with technical problems.</strong>
          </p>
        </article>        
      </section>
    </div>    
  )
}

export default Acerca


