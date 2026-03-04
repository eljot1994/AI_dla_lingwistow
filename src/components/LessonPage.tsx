import { useState } from 'react'
import type { Lesson } from '../data/courseData'
import { Accordion } from './Accordion'

type LessonPageProps = {
  lesson: Lesson
}

export function LessonPage({ lesson }: LessonPageProps) {
  const [openItem, setOpenItem] = useState<string>('cele')

  return (
    <article className="animate-fadeSlideIn space-y-6">
      <section className="card rounded-2xl p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">Zajęcia {lesson.id}</p>
        <h2 className="mt-2 text-2xl font-semibold">{lesson.title}</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300">{lesson.theme}</p>
      </section>

      <section className="grid gap-3">
        <Accordion title="Cele" content={lesson.goals} open={openItem === 'cele'} onToggle={() => setOpenItem(openItem === 'cele' ? '' : 'cele')} />
        <Accordion
          title="Narzędzia"
          content={lesson.tools}
          open={openItem === 'narzedzia'}
          onToggle={() => setOpenItem(openItem === 'narzedzia' ? '' : 'narzedzia')}
        />
        <Accordion
          title="Ćwiczenia"
          content={lesson.exercises}
          open={openItem === 'cwiczenia'}
          onToggle={() => setOpenItem(openItem === 'cwiczenia' ? '' : 'cwiczenia')}
        />
        <Accordion
          title="Refleksja / pytania"
          content={lesson.reflection}
          open={openItem === 'refleksja'}
          onToggle={() => setOpenItem(openItem === 'refleksja' ? '' : 'refleksja')}
        />
      </section>
    </article>
  )
}
