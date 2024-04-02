import '../styles/Acerca.css'

function Acerca() {
  return (
    <section className='acerca-container' id="acerca-de-mi">    
      <h2 className='title-color'>Acerca de mí</h2>
      <article className='text-container'>
      <p>
          Mi nombre es Agustín Arnaiz y  amo resolver 
          problemas. Mis primeros pasos como programador fueron en 
          <strong className='distint-color'> "C" 
          y "Assembler" estudiando Ingeniería 
          Electrónica en la UTN FRC</strong> en el año 2000.
        </p>
        <p>
          Hoy soy Analista de Sistemas y desarrollador de software. Con mi trabajo, 
          <strong className='distint-color'> he logrado integrar nuevas tecnologías en la empresa 
          L.I.E. S.R.L.</strong> donde trabajo desde hace más de 15 años.
          Estas tecnologías le permitieron a la compañía agilizar sus procesos de 
          compras (GEST2020) y mejorar el servicio de post venta de equipos (TECSEG).
        </p>    
        <p>
          El sistema "Telemedición XME", <strong className='distint-color'> permitió comercializar un
            nuevo producto a los clientes</strong>, al permitirles comandar 
          equipos en locaciones remotas, y con ello, poder brindar mejor 
          asistencia ante problemas técnicos.
        </p>
      </article>        
  </section>
  )
}

export default Acerca


