type AccordionProps = {
  title: string
  content: string[]
  open: boolean
  onToggle: () => void
}

export function Accordion({ title, content, open, onToggle }: AccordionProps) {
  return (
    <section className="card overflow-hidden rounded-xl">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
        <span className="text-lg leading-none text-slate-500">{open ? '-' : '+'}</span>
      </button>

      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="space-y-2 border-t border-slate-200 px-4 py-3 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
            {content.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
