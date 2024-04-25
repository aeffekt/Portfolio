

function StackElement({ title, svg }) {
  return (    
    <div className="stackicon" title={title}>        
        <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>    
  )
}

export default StackElement
