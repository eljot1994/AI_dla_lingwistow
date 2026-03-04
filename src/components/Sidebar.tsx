import type { Lesson } from '../data/courseData'

type SidebarProps = {
  lessons: Lesson[]
  selectedLesson: number | null
  currentLesson: number
  onSelectLesson: (id: number) => void
  onOpenDashboard: () => void
}

export function Sidebar({ lessons, selectedLesson, currentLesson, onSelectLesson, onOpenDashboard }: SidebarProps) {
  return (
    <aside className="glass sticky top-0 h-screen w-[250px] border-r border-slate-200 px-4 py-6 dark:border-slate-800">
      <button
        type="button"
        onClick={onOpenDashboard}
        className="mb-6 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      >
        Dashboard kursu
      </button>

      <div className="space-y-2 overflow-y-auto pb-4">
        {lessons.map((lesson) => {
          const isSelected = selectedLesson === lesson.id
          const isCurrent = currentLesson === lesson.id

          return (
            <button
              key={lesson.id}
              type="button"
              onClick={() => onSelectLesson(lesson.id)}
              className={`w-full rounded-xl border px-3 py-2 text-left transition ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200'
                  : 'border-slate-200 text-slate-700 hover:border-blue-300 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.08em]">Zajęcia {lesson.id}</p>
              <p className="mt-1 text-sm leading-snug">{lesson.title}</p>
              {isCurrent ? (
                <span className="mt-2 inline-flex rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                  Aktualne
                </span>
              ) : null}
            </button>
          )
        })}
      </div>
    </aside>
  )
}
