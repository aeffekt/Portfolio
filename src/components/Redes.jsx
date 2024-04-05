import logoGit from '../assets/github.svg'
import logoLinkedIn from '../assets/linkedin.svg'
import logoCv from '../assets/cv.svg'

function Redes() {
  return (
    <div id="redes" className='redes-container'>
      <a href="https://www.linkedin.com/in/arnaizagustin/" target="_blank">
            <i title='Visit LinkedIn'>
              <img className='icon' src={logoLinkedIn}></img>
            </i></a>
          <a href="https://github.com/aeffekt" target="_blank">
            <i title='Visit GitHUB'>
              <img className='icon' src={logoGit} alt="" />
            </i></a>
          <a href="https://www.canva.com/design/DAF9tgNgwAQ/i-W-QlEhDnYA1fkfYvDKWg/view?utm_content=DAF9tgNgwAQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank">
            <i title='Open CV file'>
              <img className='icon' src={logoCv} alt="" />
            </i>
          </a>          
    </div>
  )
}

export default Redes
