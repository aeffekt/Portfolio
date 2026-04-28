import { motion } from 'framer-motion'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#proyectos', label: 'My work' },
  { href: '#experiencia', label: 'Experience' },
  { href: '#stackicons', label: 'Stack' },
  { href: '#acerca-de-mi', label: 'About me' },
  { href: '#contacto', label: 'Contact' },
]

function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-cyan-500/10 bg-slate-950/75 backdrop-blur-xl"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 sm:gap-x-2">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="group relative px-3 py-1.5 font-display text-xs font-medium uppercase tracking-wider text-slate-400 transition-colors hover:text-cyan-300 sm:text-sm"
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-0 rounded-md bg-cyan-500/0 transition-colors group-hover:bg-cyan-500/10" />
                <span className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Navbar
