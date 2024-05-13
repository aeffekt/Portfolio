function Proyecto(props) {

  return (
    <article className='project-container'>
      <h3 className='distint-color'>{props.title}</h3>
      <div className="image-container">
        <figure>
          <img src={props.image} loading='async' alt="Imagen de proyecto"/>          
          <p className="capa">{props.description}</p>          
        </figure>
      </div>
      <div className='tags-container' title="Stack info">
        {props.tags.map((tag, index) => (
          <p key={index} className='tags'>{tag}</p>
        ))}
      </div>
      <div className='links-container'>
        {Object.entries(props.links).map(([name, link], linkIndex) => (
          <a 
            key={linkIndex} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="button"
            title="Open Link"
          >{name}
          </a>
        ))}        
      </div>      
    </article>
  );
}

export default Proyecto;