import { motion } from 'framer-motion'
import Redes from './Redes'
import aalogo from '../assets/icon.png'
import { Reveal } from './ui/Reveal'

function Footer() {
  return (
    <Reveal className="mt-8 border-t border-slate-800/80 bg-slate-950/80">
      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <motion.img
          src={aalogo}
          alt="Agustin Arnaiz Logo"
          className="h-12 w-12 rounded-lg border border-slate-700/50 object-contain"
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        />
        <div className="text-center sm:text-left">
          <h2 className="font-display text-lg font-semibold text-white">Agustín Arnaiz</h2>
          <p className="mt-1 font-display text-sm text-slate-500">© {new Date().getFullYear()}</p>
        </div>
        <Redes />
      </footer>
    </Reveal>
  )
}

export default Footer
