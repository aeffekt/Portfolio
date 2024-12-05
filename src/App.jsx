import { SpeedInsights } from "@vercel/speed-insights/next"
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
      <Toaster richColors />
      <Navbar />
      <section className="nav-target" id="home"></section>
      <Header />
      <section className="nav-target" id="proyectos"></section>
      <Proyectos />
      <section className="nav-target" id="experiencia"></section>
      <Experiencias />
      <section className="nav-target" id="stackicons"></section>
      <StackIcons />
      <section className="nav-target" id="acerca-de-mi"></section>
      <Acerca />
      <section className="nav-target" id="contacto"></section>
      <Contacto />
      <Footer />
      <SpeedInsights />
    </>
  )
}

export default App
