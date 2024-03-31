import React from 'react'
import '../styles/Proyecto.css'

function Proyecto(props) {
  return (
    <div className='project-container'>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <img src={props.img} alt={props.title} loading='async'></img>
      <p>{props.tech}</p>      
    </div>
  )
}

export default Proyecto
