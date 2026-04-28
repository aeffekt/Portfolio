function Experiencia(props) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-lg ring-1 ring-white/5 sm:p-8">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative">
        <h3 className="font-display text-lg font-semibold text-cyan-200 sm:text-xl">
          {props.title}{' '}
          <span className="font-normal text-slate-500">for</span>{' '}
          <span className="text-white">{props.company}</span>
        </h3>
        <time className="mt-2 block font-display text-xs uppercase tracking-wider text-emerald-400/90">
          {props.date}
        </time>
        <p className="mt-4 text-base font-medium text-slate-200">{props.description}</p>

        <h4 className="mt-6 font-display text-xs font-semibold uppercase tracking-widest text-slate-500">
          Responsibilities
        </h4>
        <ul className="mt-3 space-y-2 border-l-2 border-cyan-500/30 pl-4">
          {props.tasks.map((task, index) => (
            <li key={index} className="text-sm text-slate-400">
              {task}
            </li>
          ))}
        </ul>

        <h4 className="mt-8 font-display text-xs font-semibold uppercase tracking-widest text-slate-500">
          Key accomplishments
        </h4>
        <ul className="mt-3 space-y-2 border-l-2 border-emerald-500/25 pl-4">
          {props.feats.map((feat, index) => (
            <li key={index} className="text-sm text-slate-400">
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default Experiencia
