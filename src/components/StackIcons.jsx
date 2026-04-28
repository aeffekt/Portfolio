import StackElement from './StackElement'
import JsonData from '../data/StackIcons.json'
import SectionTitle from './SectionTitle'
import { Reveal, RevealStagger } from './ui/Reveal'

function StackIcons() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <SectionTitle icon="◇">My Stack</SectionTitle>

      <div className="space-y-12">
        {JsonData.map((category, index) => {
          const categoryName = Object.keys(category)[0]
          const items = category[categoryName]

          return (
            <Reveal key={index} delay={index * 0.06}>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 ring-1 ring-white/5 sm:p-8">
                <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {categoryName}
                </h3>
                <RevealStagger className="flex flex-wrap gap-4">
                  {items.map((item, itemIndex) => (
                    <StackElement key={itemIndex} title={item.title} svg={item.svg} />
                  ))}
                </RevealStagger>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

export default StackIcons
