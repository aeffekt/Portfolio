import { Reveal } from './ui/Reveal'

export default function SectionTitle({ icon, children }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <h2 className="flex flex-wrap items-center gap-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/25 bg-cyan-500/10 text-lg text-cyan-300 shadow-[0_0_24px_-8px_rgba(34,211,238,0.5)]">
          {icon}
        </span>
        <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{children}</span>
      </h2>
      <div className="mt-4 h-px max-w-xs bg-gradient-to-r from-cyan-500/50 via-emerald-500/30 to-transparent" />
    </Reveal>
  )
}
