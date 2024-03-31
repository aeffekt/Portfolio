import React from 'react'
import jsonData from'./Experiencias.json'
import Experiencia from './Experiencia'

function Experiencias() {
  console.log(jsonData)
  return (
    <section className='experiencias-container'>
      {jsonData.map((experiencia, index) => {
        return(
          <Experiencia 
            key={index}
            title={experiencia.title}
            description={experiencia.description}
            date={experiencia.date}
            tasks={experiencia.tasks}
            company={experiencia.company}            
          />
        )
      })}
    </section>      
  )
}

export default Experiencias
