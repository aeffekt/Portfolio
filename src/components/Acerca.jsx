import SectionTitle from './SectionTitle'
import { Reveal } from './ui/Reveal'

function Acerca() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <SectionTitle icon="→">About me</SectionTitle>

      <Reveal>
        <article className="space-y-6 rounded-2xl border border-slate-800/90 bg-slate-900/40 p-6 text-lg leading-relaxed text-slate-400 shadow-xl ring-1 ring-white/5 sm:p-10">
          <p>
            I am Agustín Arnaiz, a <strong className="font-semibold text-slate-200">Systems Analyst and Backend Software Engineer</strong>.
            <strong className="font-semibold text-cyan-300"> My programming journey started with C and Assembler</strong> while
            studying Electronics Engineering at <strong className="text-slate-200">UTN FRC</strong>.
          </p>
          <p>
            Throughout my career, I have focused on building software that creates measurable impact for both companies and their
            customers.
            <strong className="font-semibold text-cyan-300"> I introduced new technologies that opened real business opportunities</strong>,
            from streamlining purchasing workflows with <strong className="italic text-slate-300">GEST2020</strong> to improving
            after-sales operations with <strong className="italic text-slate-300">TECSEG</strong>.
          </p>
          <p>
            I also developed <strong className="italic text-slate-300">XME Telemetry</strong>, a system that enabled remote control of
            high-power transmitters.
            <strong className="font-semibold text-cyan-300"> This solution became a new product line</strong> and improved technical
            support by reducing response times in critical scenarios.
          </p>
        </article>
      </Reveal>
    </div>
  )
}

export default Acerca
