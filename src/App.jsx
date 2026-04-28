import Navbar from './components/Navbar'
import Header from './components/Header'
import Proyectos from './components/Proyectos'
import Experiencias from './components/Experiencias'
import StackIcons from './components/StackIcons'
import Acerca from './components/Acerca'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import PageBackdrop from './components/PageBackdrop'

import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <PageBackdrop />
      <Toaster richColors theme="dark" position="top-center" />
      <Navbar />
      <section className="scroll-mt-24" id="home" aria-hidden />
      <Header />
      <section className="scroll-mt-24" id="proyectos" aria-hidden />
      <Proyectos />
      <section className="scroll-mt-24" id="experiencia" aria-hidden />
      <Experiencias />
      <section className="scroll-mt-24" id="stackicons" aria-hidden />
      <StackIcons />
      <section className="scroll-mt-24" id="acerca-de-mi" aria-hidden />
      <Acerca />
      <section className="scroll-mt-24" id="contacto" aria-hidden />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
