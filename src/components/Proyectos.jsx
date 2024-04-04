import React from 'react'
import '../styles/Proyectos.css'
import Proyecto from './Proyecto'
import jsonData from'./Proyectos.json'


function Proyectos() {    

  return (
    <div className='new-block' id="proyectos">
      <h2 className='title-color'>&#60;&#8725;&#62; Proyectos</h2>
      <section className='proyectos-container' >      
        {jsonData.map((proyecto, index) => {
            return(
              <Proyecto 
                key={index} 
                title={proyecto.title}
                description={proyecto.description}
                image={proyecto.image}
                links={proyecto.links}              
                tags={proyecto.tags}
              />
            )
          })
        }
     </section>
    </div>
    
  )
}

export default Proyectos
