import { motion } from 'framer-motion'
import { itemFadeUp } from '../lib/motionVariants'

function StackElement({ title, svg }) {
  return (
    <motion.div
      variants={itemFadeUp}
      title={title}
      className="group flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/70 shadow-inner transition-all duration-300 hover:border-cyan-500/45 hover:shadow-[0_0_28px_-6px_rgba(34,211,238,0.35)] sm:h-[4.5rem] sm:w-[4.5rem]"
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      <div
        className="flex h-10 w-10 items-center justify-center [&_svg]:max-h-full [&_svg]:max-w-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </motion.div>
  )
}

export default StackElement
