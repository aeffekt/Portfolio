import { motion } from 'framer-motion'
import jsonData from '../data/Experiencias.json'
import Experiencia from './Experiencia'
import SectionTitle from './SectionTitle'
import { itemFadeUp } from '../lib/motionVariants'
import { RevealStagger } from './ui/Reveal'

function Experiencias() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <SectionTitle icon="✓">Experience</SectionTitle>
      <RevealStagger className="relative space-y-8">
        <div
          className="absolute top-3 bottom-3 left-[1.125rem] hidden w-px bg-gradient-to-b from-cyan-500/50 via-slate-700 to-emerald-500/30 md:block"
          aria-hidden
        />
        {jsonData.map((experiencia, index) => (
          <motion.div key={index} variants={itemFadeUp} className="relative md:pl-10">
            <span
              className="absolute top-8 left-3 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.6)] md:block"
              aria-hidden
            />
            <Experiencia
              title={experiencia.title}
              company={experiencia.company}
              description={experiencia.description}
              date={experiencia.date}
              tasks={experiencia.tasks}
              feats={experiencia.feats}
            />
          </motion.div>
        ))}
      </RevealStagger>
    </div>
  )
}

export default Experiencias
