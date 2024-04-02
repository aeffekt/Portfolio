import React from 'react'
import '../styles/Proyectos.css'
import Proyecto from './Proyecto'
import jsonData from'./Proyectos.json'


function Proyectos() {    

  return (
    <section className='proyectos-container'  id="proyectos">
      <h2 className='title-color'>Proyectos</h2>
      {
        jsonData.map((proyecto, index) => {
          return(
            <Proyecto 
              key={index} 
              title={proyecto.title}
              description={proyecto.description}
              img={proyecto.images}
              github={proyecto.github}
              url={proyecto.url}
              tags={proyecto.tags}
            />
          )
        })
      }
     </section>
  )
}

export default Proyectos
