import '../styles/StackIcons.css'
import StackIcon from 'tech-stack-icons'

function StackIcons() {
  return (
    <div className='new-block' id="stackicons">
      <h2 className='title-color'>&#10070; My Stack</h2>
      <section className='stackicons-container'>
        <div className="fila">
          <h3 className='text-sutil'>Frontend</h3>
          <StackIcon className='stackicon' name="html5" />
          <StackIcon className='stackicon' name="css3" />
          <StackIcon className='stackicon' name="js" />
          <StackIcon className='stackicon' name="vitejs" />
          <StackIcon className='stackicon' name="reactjs" />
          <StackIcon className='stackicon' name="bootstrap5" />
          <StackIcon className='stackicon' name="jquery" />          
        </div>
        <div className="fila">
          <h3 className='text-sutil'>Backend</h3>
          <StackIcon className='stackicon' name="python" title="Python" />
          <StackIcon className='stackicon' name="mysql" />
          <StackIcon className='stackicon' name="django" />
          <StackIcon className='stackicon' name="flask" />
          <StackIcon className='stackicon' name="json" />          
          <StackIcon className='stackicon' name="swagger" />
        </div>
        <div className="fila">  
          <h3 className='text-sutil'>Tools & Agile</h3>                
          <StackIcon className='stackicon' name="docker" />
          <StackIcon className='stackicon' name="git" />
          <StackIcon className='stackicon' name="github" />
          <StackIcon className='stackicon' name="vscode" />
          <StackIcon className='stackicon' name="jira" />
        </div>
      </section>
    </div>
  )
}

export default StackIcons
