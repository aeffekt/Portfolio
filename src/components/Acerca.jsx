import '../styles/Acerca.css'

function Acerca() {
  return (
    <div className='new-block' id="acerca-de-mi">
      <h2 className='title-color'>&#9755; Acerca de mí</h2>
      <section className='acerca-container'>      
        <article className='text-container'>
        <p>
            Mi nombre es Agustín Arnaiz y  amo resolver problemas. 
            Mis primeros pasos como programador fueron en 
            <strong className='distint-color'> "C" 
            y "Assembler" cuando estudiaba Ingeniería 
            Electrónica en la UTN FRC</strong> en el año 2000. 
            Hoy soy Analista de Sistemas y desarrollador de software.
          </p>
          <p>
            Con mi trabajo, he aportado cambios significativos a la empresa para la cuál
            trabajo, como a sus clientes.
            <strong className='distint-color'> he logrado integrar nuevas tecnologías y
            con ello nuevas posibilidades.</strong> Como agilizar sus procesos de 
            compras (GEST2020) y mejorar el servicio de 
            post venta de equipos (TECSEG).
          </p>    
          <p>
            Además, el sistema "Telemedición XME", <strong className='distint-color'> 
            permitió comercializar un nuevo producto a los clientes</strong>, 
            al brindar la posibilidad de comandar equipos en locaciones remotas, y con ello, poder brindar mejor 
            asistencia ante problemas técnicos.
          </p>
        </article>        
      </section>
    </div>    
  )
}

export default Acerca


