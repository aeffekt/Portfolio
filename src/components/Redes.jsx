import { motion } from 'framer-motion'
import logoGit from '../assets/github.svg'
import logoLinkedIn from '../assets/linkedin.svg'
import logoCv from '../assets/cv.svg'

const links = [
  {
    href: 'https://www.linkedin.com/in/arnaizagustin/',
    img: logoLinkedIn,
    title: 'Visit LinkedIn',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/aeffekt',
    img: logoGit,
    title: 'Visit GitHub',
    label: 'GitHub',
  },
  {
    href: 'https://docs.google.com/document/d/1G5P3lpNDVEHUCnlSeT_mGEnyFiV9_wO-AxlpS070oKM/edit?usp=sharing',
    img: logoCv,
    title: 'Open CV file',
    label: 'CV',
  },
]

function Redes({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map(({ href, img, title, label }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          aria-label={label}
          className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/80 shadow-lg shadow-black/20 transition-colors hover:border-cyan-500/40 hover:bg-slate-800/90"
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-300 group-hover:from-cyan-500/15 group-hover:to-emerald-500/10 group-hover:opacity-100" />
          <img src={img} alt="" className="relative z-10 h-5 w-5 opacity-90 invert-[0.15] transition-all group-hover:opacity-100 group-hover:brightness-110" />
        </motion.a>
      ))}
    </div>
  )
}

export default Redes
