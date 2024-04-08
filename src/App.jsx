import './styles/App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Proyectos from './components/Proyectos'
import Experiencias from './components/Experiencias'
import StackIcons from './components/StackIcons'
import Acerca from './components/Acerca'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

import { Toaster, toast } from 'sonner'

function App() {  
  return (    
    <>    
      <Toaster richColors/>      
      <Navbar />
      <div className="nav-target" id="home"></div>
      <Header />
      <div className="nav-target" id="proyectos"></div>
      <Proyectos />      
      <div className="nav-target" id="experiencia"></div>
      <Experiencias /> 
      <div className="nav-target" id="stackicons"></div>
      <StackIcons />
      <div className="nav-target" id="acerca-de-mi"></div>
      <Acerca />      
      <div className="nav-target" id="contacto"></div>
      <Contacto />

      <Footer />
    </>
  )
}

export default App
