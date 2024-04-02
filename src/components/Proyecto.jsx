import React, { useState } from 'react'

function Proyecto(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.img.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.img.length - 1 : prevIndex - 1
    );
  };
  return (
    <article className='project-container'>        
        <img src={props.img} alt={props.title} loading='async' />        
        {props.tags.map((tag, index) => (
          <h6 key={index} className='tags'>{tag}</h6>
        ))}      
      
        <h3 className='distint-color'>{props.title}</h3>
        <small>{props.description}</small>
        <div className='links-container'>
          {props.github ? <a href={props.github} 
                            target="_blank"
                            alt="GitHub del proyecto"
                            title='Ver código'>GitHub</a> : null
          }
          {props.url ? <a type="button"href={props.url} 
                          target="_blank"
                          alt="URL del proyecto"
                          title='Visitar URL'>URL</a> : null
          }      
        </div>
      
      
    </article>
  )
}

export default Proyecto
