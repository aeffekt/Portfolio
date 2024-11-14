import '../styles/Navbar.css'


function Navbar() {
  return (
    <nav className='navbar-container'>
      <ul className='ul-navbar'>
        <li><a className='active' href="#home">Home</a></li>
        <li><a href="#proyectos">My work</a></li>
        <li><a href="#experiencia">Experience</a></li>
        <li><a href="#stackicons">Stack</a></li>
        <li><a href="#acerca-de-mi">About me</a></li>
        <li><a href="#contacto">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
