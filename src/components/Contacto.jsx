import SectionTitle from './SectionTitle'
import { Reveal } from './ui/Reveal'

const Contacto = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <SectionTitle icon="✎">Contact me</SectionTitle>

      <Reveal>
        <section className="rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-900/70 via-slate-950/80 to-slate-900/70 p-8 shadow-xl ring-1 ring-cyan-500/10 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <div className="space-y-1">
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-slate-500">Mail</p>
              <a
                href="mailto:arnaizagustin@gmail.com"
                className="font-display text-lg font-medium text-cyan-300 transition-colors hover:text-cyan-200"
              >
                arnaizagustin@gmail.com
              </a>
            </div>
            <div className="h-px w-full bg-slate-800 sm:h-16 sm:w-px sm:bg-slate-800" aria-hidden />
            <div className="space-y-1">
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-slate-500">Phone</p>
              <a href="tel:+543513281199" className="font-display text-lg font-medium text-cyan-300 transition-colors hover:text-cyan-200">
                +54-351-3281199
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
}

export default Contacto
