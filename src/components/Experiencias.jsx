import React from 'react'
import jsonData from'./Experiencias.json'
import Experiencia from './Experiencia'
import '../styles/Experiencia.css'

function Experiencias() {  
  return (
    <section className='experiencias-container'  id="experiencia">
      <h2 className='title-color'>Experiencia</h2>
      {jsonData.map((experiencia, index) => {
        return(
          <Experiencia
            key={index}
            title={experiencia.title}
            company={experiencia.company}
            description={experiencia.description}
            date={experiencia.date}
            tasks={experiencia.tasks}
            feats={experiencia.feats}            
          />
        )
      })}
    </section>      
  )
}

export default Experiencias
