import { useMemo, useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { LessonOnePage } from './components/LessonOnePage'
import { LessonTwoPage } from './components/LessonTwoPage'
import { LessonPage } from './components/LessonPage'
import { Sidebar } from './components/Sidebar'
import { lessons, modules } from './data/courseData'

const CURRENT_LESSON = 1

export default function App() {
  const [activeLessonId, setActiveLessonId] = useState<number | null>(1)
  const [expandedModule, setExpandedModule] = useState<string | null>('m1')

  const activeLesson = useMemo(() => lessons.find((lesson) => lesson.id === activeLessonId) ?? null, [activeLessonId])

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">
      <Header />

      <div className="mx-auto flex max-w-[1500px]">
        <Sidebar
          lessons={lessons}
          selectedLesson={activeLessonId}
          currentLesson={CURRENT_LESSON}
          onSelectLesson={setActiveLessonId}
          onOpenDashboard={() => setActiveLessonId(null)}
        />

        <main className="w-full px-4 py-6 sm:px-8 sm:py-8">
          {!activeLesson ? (
            <Dashboard
              modules={modules}
              lessons={lessons}
              currentLesson={CURRENT_LESSON}
              expandedModule={expandedModule}
              onToggleModule={(id) => setExpandedModule((prev) => (prev === id ? null : id))}
              onOpenLesson={setActiveLessonId}
            />
          ) : activeLesson.id === 1 ? (
            <LessonOnePage />
          ) : activeLesson.id === 2 ? (
            <LessonTwoPage />
          ) : (
            <LessonPage lesson={activeLesson} />
          )}
        </main>
      </div>
    </div>
  )
}
