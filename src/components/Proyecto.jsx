import { motion } from 'framer-motion'
import { itemFadeUp } from '../lib/motionVariants'

function Proyecto(props) {
  const firstLink = Object.entries(props.links)[0]

  return (
    <motion.article
      variants={itemFadeUp}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/50 shadow-xl shadow-black/30 ring-1 ring-white/5 transition-all duration-300 hover:border-cyan-500/25 hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.15)]"
    >
      <div className="border-b border-slate-800/80 px-5 pb-4 pt-5">
        <h3 className="font-display text-lg font-semibold text-cyan-200">{props.title}</h3>
      </div>

      <a
        href={firstLink[1]}
        target="_blank"
        rel="noopener noreferrer"
        title="Open in new tab"
        className="relative block overflow-hidden bg-slate-950"
      >
        <figure className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={props.image}
            loading="lazy"
            alt={props.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent p-4 opacity-95 transition-opacity duration-300 group-hover:opacity-100 md:translate-y-1 md:opacity-90 md:group-hover:translate-y-0">
            <p className="text-sm text-slate-200">
              {props.description}{' '}
              <span className="text-slate-400">
                ({props.type} — {props.year})
              </span>
            </p>
          </figcaption>
        </figure>
      </a>

      <div className="flex flex-wrap gap-2 px-5 py-4" title="Stack info">
        {props.tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-display text-xs font-medium text-emerald-200/90"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-800/80 px-5 py-4">
        {Object.entries(props.links).map(([name, link], linkIndex) => (
          <motion.a
            key={linkIndex}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title="Open Link"
            className="inline-flex items-center justify-center rounded-lg border border-cyan-500/35 bg-cyan-500/10 px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide text-cyan-200 transition-colors hover:bg-cyan-500/20 hover:text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {name}
          </motion.a>
        ))}
      </div>
    </motion.article>
  )
}

export default Proyecto
