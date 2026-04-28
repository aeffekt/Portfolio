import { motion } from 'framer-motion'
import Redes from './Redes'
import logoAA from '../assets/agustin_arnaiz.jpg'
import { Reveal } from './ui/Reveal'

function Header() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16">
      <Reveal className="overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90 p-8 shadow-2xl shadow-cyan-950/20 ring-1 ring-cyan-500/10 sm:p-10 md:p-12">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/40 via-emerald-400/25 to-transparent blur-md" />
            <img
              decoding="async"
              className="relative h-36 w-36 rounded-full border-2 border-cyan-500/30 object-cover shadow-xl ring-4 ring-slate-950 sm:h-44 sm:w-44"
              src={logoAA}
              alt="Foto de Agustin Arnaiz"
            />
          </motion.div>

          <div className="max-w-2xl space-y-4 text-center md:text-left">
            <Reveal delay={0.05}>
              <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90">
                Backend · APIs · Systems
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-200/90 bg-clip-text text-transparent">
                  Agustín Arnaiz
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-slate-300 sm:text-xl">
                Systems Analyst and{' '}
                <strong className="font-semibold text-cyan-300">Backend Software Engineer</strong>.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-400">
                With proven experience in design, developing and deploying Software Systems.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="border-l-2 border-cyan-500/40 pl-4 italic text-slate-400">
                &ldquo;I am highly driven by the process of{' '}
                <strong className="font-semibold not-italic text-slate-200">creating new things.</strong>&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Redes className="justify-center md:justify-start pt-2" />
            </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default Header
