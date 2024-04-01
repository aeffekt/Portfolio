import '../styles/Main.css'
import Experiencias from './Experiencias'
import Proyectos from '../components/Proyectos'
import Acerca from '../components/Acerca'
import Contacto from '../components/Contacto'


function Main() {
  return (
    <div className='main-container' id='main'>            
      <Proyectos />      
      <Experiencias />      
      <Acerca />      
      <Contacto />
    </div>
  )
}

export default Main
