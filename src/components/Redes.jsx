import logoGit from '../assets/github.svg'
import logoLinkedIn from '../assets/linkedin.svg'
import logoCv from '../assets/cv.svg'
import '../styles/Redes.css'

function Redes() {
  return (
    <div id="redes" className='redes-container'>
      <a href="https://www.linkedin.com/in/arnaizagustin/" target="_blank">
        <i title='Visit LinkedIn'>
          <img className='icon' src={logoLinkedIn} alt="Logo LinkedIn"></img>
        </i></a>
      <a href="https://github.com/aeffekt" target="_blank">
        <i title='Visit GitHUB'>
          <img className='icon' src={logoGit} alt="Logo GitHub" />
        </i></a>
      <a href="https://docs.google.com/document/d/1G5P3lpNDVEHUCnlSeT_mGEnyFiV9_wO-AxlpS070oKM/edit?usp=sharing"
        target="_blank">
        <i title='Open CV file'>
          <img className='icon' src={logoCv} alt="Logo CV" />
        </i>
      </a>
    </div>
  )
}

export default Redes
