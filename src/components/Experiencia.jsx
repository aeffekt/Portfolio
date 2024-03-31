import React from 'react'
import '../styles/Experiencia.css'

function Experiencia(props) {
  return (          
    <div className="experiencia-container">
        <h3>{props.title}</h3>
        <h4>{props.company}</h4>
        <time>{props.date}</time>
        <p>{props.description}</p>        
        <ul>
            {Object.values(props.tasks).map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    </div>
  )
}

export default Experiencia
