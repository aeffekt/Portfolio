import './styles/App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Proyectos from './components/Proyectos'
import Experiencias from './components/Experiencias'
import Acerca from './components/Acerca'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {  

  return (
    <>      
      <Navbar />
      <Header />
      <Proyectos />      
      <Experiencias />      
      <Acerca />      
      <Contacto />
      <Footer />
    </>
  )
}

export default App
