import React from 'react'
import '../styles/Proyectos.css'
import Proyecto from './Proyecto'
import jsonData from'./Proyectos.json'


function Proyectos() {    

  return (
    <section className='proyectos-container'>
      <h1 id="proyectos">Proyectos</h1>
      {
        jsonData.map((proyecto, index) => {
          return(
            <Proyecto 
              key={index} 
              title={proyecto.title}
              description={proyecto.description}
              img={proyecto.images}
              tech={proyecto.tech}
            />
          )
        })
      }
     </section>
  )
}

export default Proyectos
