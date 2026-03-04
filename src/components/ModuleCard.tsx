import type { Module } from '../data/courseData'

type ModuleCardProps = {
  module: Module
  expanded: boolean
  onToggle: (id: string) => void
  onOpenLesson: (lessonId: number) => void
}

export function ModuleCard({ module, expanded, onToggle, onOpenLesson }: ModuleCardProps) {
  const lessonIds = Array.from({ length: module.lessonRange[1] - module.lessonRange[0] + 1 }, (_, i) => module.lessonRange[0] + i)

  return (
    <article className="card overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={() => onToggle(module.id)}
        className={`w-full bg-gradient-to-br ${module.colorClass} p-6 text-left transition hover:opacity-95`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">Moduł</p>
        <h3 className="mt-2 text-xl font-semibold">{module.title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{module.subtitle}</p>
      </button>

      <div className={`grid transition-all duration-300 ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="border-t border-slate-200 p-4 dark:border-slate-700">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-slate-500">Zajęcia</p>
            <div className="flex flex-wrap gap-2">
              {lessonIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => onOpenLesson(id)}
                  className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
                >
                  Zajęcia {id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
