import React from 'react'
import jsonData from'../data/Experiencias.json'
import Experiencia from './Experiencia'
import '../styles/Experiencia.css'

function Experiencias() {  
  return (
    <div className='new-block'>
      <h2 className='title-color'>&#10003; Experience</h2>
      <section className='experiencias-container'  >      
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
    </div>

  )
}

export default Experiencias
