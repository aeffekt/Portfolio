import '../styles/StackIcons.css'
import StackElement from './StackElement'
import JsonData from './StackIcons.json'

function StackIcons() {

  return (
    <div className='new-block'>
      <h2 className='title-color'>&#10070; My Stack</h2>
      <section className='stackicons-container'>
      {JsonData.map((category, index) => (              
        <div className='fila' key={index}>
          <h3  className='text-sutil'>
            {Object.keys(category)[0]}
          </h3>
          {category[Object.keys(category)[0]].map((item, index) => (
            <StackElement key={index} title={item.title} svg={item.svg}/>
          ))}
        </div>        
      ))}
      </section>
    </div>
  )
}

export default StackIcons
