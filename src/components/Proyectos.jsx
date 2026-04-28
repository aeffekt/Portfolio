import Proyecto from './Proyecto'
import jsonData from '../data/Proyectos.json'
import SectionTitle from './SectionTitle'
import { RevealStagger } from './ui/Reveal'

function Proyectos() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <SectionTitle icon={<span className="font-mono text-sm tracking-tighter">&lt;/&gt;</span>}>
        My work
      </SectionTitle>
      <RevealStagger className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {jsonData.map((proyecto, index) => (
          <Proyecto
            key={index}
            title={proyecto.title}
            description={proyecto.description}
            image={proyecto.image}
            type={proyecto.type}
            year={proyecto.year}
            links={proyecto.links}
            tags={proyecto.tags}
          />
        ))}
      </RevealStagger>
    </div>
  )
}

export default Proyectos
