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
      <Header />
      <Proyectos />      
      <Experiencias /> 
      <StackIcons />
      <Acerca />      
      <Contacto />
      <Footer />
    </>
  )
}

export default App
