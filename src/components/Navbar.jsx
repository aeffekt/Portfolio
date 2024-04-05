import '../styles/Navbar.css'


function Navbar() {
  return (
    <nav className='navbar-container'>                
        <ul className='ul-navbar'>          
          <a href="#home"><li>Home</li></a>
          <a href="#proyectos"><li>Projects</li></a>
          <a href="#experiencia"><li>Experience</li></a>
          <a href="#stackicons"><li>Stack</li></a>
          <a href="#acerca-de-mi"><li>About me</li></a>
          <a href="#contacto"><li>Contact</li></a>          
        </ul>
    </nav>
  )
}

export default Navbar
