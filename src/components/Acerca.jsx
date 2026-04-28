import SectionTitle from './SectionTitle'
import { Reveal } from './ui/Reveal'

function Acerca() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <SectionTitle icon="→">About me</SectionTitle>

      <Reveal>
        <article className="space-y-6 rounded-2xl border border-slate-800/90 bg-slate-900/40 p-6 text-lg leading-relaxed text-slate-400 shadow-xl ring-1 ring-white/5 sm:p-10">
          <p>
            My name is Agustín Arnaiz and I am a <strong className="font-semibold text-slate-200">Systems Developer</strong>.
            <strong className="font-semibold text-cyan-300">
              {' '}
              My first steps as a programmer were in &quot;C&quot; and &quot;Assembler&quot;
            </strong>{' '}
            studying Electronics Engineering at the <strong className="text-slate-200">UTN FRC</strong> in the year 2000.
          </p>
          <p>
            With my work, I have brought significant changes to the company for which I work, as well as its clients.
            <strong className="font-semibold text-cyan-300">
              {' '}
              I managed to integrate new technologies, and with it, new possibilities.
            </strong>{' '}
            How to streamline the purchases processes <strong className="italic text-slate-300">(GEST2020)</strong> and improve
            it&apos;s after-sales customer service <strong className="italic text-slate-300">(TECSEG)</strong>.
          </p>
          <p>
            In addition, the <strong className="italic text-slate-300">&quot;XME Telemetry&quot;</strong> system{' '}
            <strong className="font-semibold text-cyan-300">
              allowed a new product to be marketed to customers,
            </strong>{' '}
            By providing the possibility of commanding high power transmitters in remote locations, and with this, being able{' '}
            <strong className="font-semibold text-cyan-300">
              to provide a better assistance with technical problems.
            </strong>
          </p>
        </article>
      </Reveal>
    </div>
  )
}

export default Acerca
