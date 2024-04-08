import StackIcon from 'tech-stack-icons'

function StackElement({ title, name }) {
  return (    
    <div className="stackicon" title={title}>
        <StackIcon name={name}/>
    </div>    
  )
}

export default StackElement
