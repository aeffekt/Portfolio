import '../styles/StackIcons.css'
import StackIcon from 'tech-stack-icons'

function StackIcons() {

  return (
    <div className='new-block' id="stackicons">
      <h2 className='title-color'>&#10070; My Stack</h2>
      <section className='stackicons-container'>
        <div className="fila">
          <h3 className='text-sutil'>Frontend</h3>          
          <StackIcon className='HTML' name="html5"/>
          <StackIcon className='CSS' name="css3" />
          <StackIcon className='JavaScript' name="js" />
          <StackIcon className='Vite JS' name="vitejs" />
          <StackIcon className='React JS' name="reactjs" />
          <StackIcon className='Bootstrap' name="bootstrap5" />
          <StackIcon className='JQuery' name="jquery" />          
        </div>
        <div className="fila">
          <h3 className='text-sutil'>Backend</h3>
          <StackIcon className='Python' name="python" />
          <StackIcon className='MySQL' name="mysql" />
          <StackIcon className='Django' name="django" />
          <StackIcon className='Flask' name="flask"/>
          <StackIcon className='JSON' name="json"/>          
          <StackIcon className='Swagger' name="swagger"  />
        </div>
        <div className="fila">  
          <h3 className='text-sutil'>Tools & Agile</h3>                
          <StackIcon className='Docker' name="docker" />
          <StackIcon className='Git' name="git" />
          <StackIcon className='GitHub' name="github"/>
          <StackIcon className='VSCode' name="vscode" />
          <StackIcon className='Jira' name="jira" />
        </div>
      </section>
    </div>
  )
}

export default StackIcons
