

function Experiencia(props) {
  return (          
    <article className="experiencia-container">
        <h3  className='distint-color'>{props.title} <small className="text-sutil">for</small> {props.company}</h3>        
        <time><i><small>{props.date}</small></i></time>
        <h4>{props.description}</h4>
        <h5>Responsabilities:</h5>
        <ul>
            {props.tasks.map((task, index) => (
                <li key={index}>
                    <small>{task}</small></li>
            ))}
        </ul>
        <h5>Key accomplishments:</h5>
        <ul>
            {props.feats.map((feat, index) => (
                <li key={index}>
                    <small>{feat}</small></li>
            ))}
        </ul>
    </article>
  )
}

export default Experiencia
