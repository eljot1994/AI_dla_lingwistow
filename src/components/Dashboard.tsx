import { useMemo, useState } from 'react'
import type { Lesson, Module } from '../data/courseData'
import { ModuleCard } from './ModuleCard'

type DashboardProps = {
  modules: Module[]
  lessons: Lesson[]
  currentLesson: number
  expandedModule: string | null
  onToggleModule: (id: string) => void
  onOpenLesson: (lessonId: number) => void
}

export function Dashboard({ modules, lessons, currentLesson, expandedModule, onToggleModule, onOpenLesson }: DashboardProps) {
  const [moduleFilter, setModuleFilter] = useState<string>('all')

  const totalLessons = lessons.length
  const completedLessons = Math.min(Math.max(currentLesson - 1, 0), totalLessons)
  const progressPercent = Math.round((completedLessons / totalLessons) * 100)

  const filteredLessons = useMemo(() => {
    if (moduleFilter === 'all') return lessons
    return lessons.filter((lesson) => lesson.moduleId === moduleFilter)
  }, [lessons, moduleFilter])

  const perspectives = [
    {
      id: '1',
      title: 'AI jako środowisko pracy',
      subtitle: 'Perspektywa użytkownika',
      scope: [
        'Generowanie, redakcja, streszczanie i transformacja rejestru.',
        'Tłumaczenie, transkrypcja oraz praca multimodalna.',
      ],
      tools: ['Modele językowe', 'Systemy tłumaczeniowe', 'Narzędzia redakcyjne i transkrypcyjne'],
      competencies: ['Ocena jakości treści', 'Wykrywanie błędów i uproszczeń', 'Świadome sterowanie stylem'],
      tone: 'border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20',
    },
    {
      id: '2',
      title: 'AI jako narzędzie analizy tekstu',
      subtitle: 'Perspektywa badawcza',
      scope: [
        'Cechy ilościowe, sentyment, motywy i podobieństwo tekstów.',
        'Narracje, strategie argumentacyjne i refleksja interpretacyjna.',
      ],
      tools: ['Narzędzia NLP', 'Analiza sentymentu', 'Wizualizacja danych tekstowych'],
      competencies: ['Łączenie analizy ilościowej i jakościowej', 'Krytyczna interpretacja wyników', 'Rozumienie ograniczeń klasyfikacji'],
      tone: 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20',
    },
    {
      id: '3',
      title: 'AI jako technologia i infrastruktura',
      subtitle: 'Perspektywa infrastrukturalna',
      scope: [
        'Modele lokalne vs chmurowe, prywatność danych, ograniczenia sprzętowe.',
        'Automatyzacja i integracja AI z procesem badawczym.',
      ],
      tools: ['Interfejsy lokalnych modeli', 'API modeli językowych', 'Narzędzia automatyzacji raportów'],
      competencies: ['Świadome decyzje o danych', 'Podstawowa automatyzacja', 'Integracja narzędzi w workflow'],
      tone: 'border-rose-200 bg-rose-50/60 dark:border-rose-900 dark:bg-rose-950/20',
    },
  ]

  return (
    <article className="animate-fadeSlideIn space-y-8">
      <section className="card rounded-3xl p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">Dashboard kursu</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">AI dla lingwistów</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">15 x 1,5 h | 3 moduły | Zajęcia przeglądowo-warsztatowe</p>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Fakultet stanowi praktyczne wprowadzenie do narzędzi AI wykorzystywanych w pracy z językiem: od tłumaczenia,
          transkrypcji i analizy tekstu, po systemy ogólnego przeznaczenia wspierające badania, dydaktykę i opracowanie
          materiałów. Trzonem kursu jest świadome i krytyczne korzystanie z AI, z naciskiem na jakość, ograniczenia,
          metodologię i etykę.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onOpenLesson(currentLesson)}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Przejdź do aktualnych zajęć ({currentLesson})
          </button>
          <button
            type="button"
            onClick={() => onOpenLesson(1)}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
          >
            Zacznij od zajęć 1
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="card rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Postęp kursu</p>
          <p className="mt-2 text-2xl font-semibold">{progressPercent}%</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div className="h-full bg-blue-500 transition-all" style={{ width: `${progressPercent}%` }} />
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {completedLessons}/{totalLessons} zajęć zakończonych
          </p>
        </article>

        <article className="card rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Aktualny etap</p>
          <p className="mt-2 text-2xl font-semibold">Zajęcia {currentLesson}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{lessons.find((lesson) => lesson.id === currentLesson)?.title || 'Temat w trakcie aktualizacji'}</p>
        </article>

        <article className="card rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Liczba modułów</p>
          <p className="mt-2 text-2xl font-semibold">{modules.length}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Średnio {Math.round(totalLessons / modules.length)} zajęć na moduł
          </p>
        </article>

        <article className="card rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Do końca semestru</p>
          <p className="mt-2 text-2xl font-semibold">{Math.max(totalLessons - completedLessons, 0)}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">zajęć do przejścia</p>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            expanded={expandedModule === module.id}
            onToggle={onToggleModule}
            onOpenLesson={onOpenLesson}
          />
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="card rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Cel kursu</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>Rozwinięcie praktycznych kompetencji pracy z AI w obszarze języka.</li>
            <li>Umiejętność krytycznej oceny wyników (błędy, uproszczenia, halucynacje).</li>
            <li>Dobór narzędzi do badań, dydaktyki i tworzenia materiałów.</li>
          </ul>
        </div>

        <div className="card rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Forma zaliczenia</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Mini-projekt: student wybiera jeden problem językowy i przedstawia kilka sposobów rozwiązania z użyciem różnych
            narzędzi AI, porównuje wyniki i omawia ich ograniczenia. W analizie liczą się tylko unikatowe rozwiązania,
            bez powielania duplikujących się rezultatów.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Struktura kursu: 3 perspektywy AI</h3>
        <div className="grid gap-4 lg:grid-cols-3">
          {perspectives.map((item) => (
            <article key={item.id} className={`card rounded-2xl p-5 ${item.tone}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Moduł {item.id}</p>
              <h4 className="mt-2 text-base font-semibold">{item.title}</h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.subtitle}</p>

              <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <div>
                  <p className="font-semibold">Zakres</p>
                  <ul className="mt-1 space-y-1 text-slate-600 dark:text-slate-300">
                    {item.scope.map((line) => (
                      <li key={line}>- {line}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Narzędzia</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-slate-300 px-2 py-0.5 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Kompetencje</p>
                  <ul className="mt-1 space-y-1 text-slate-600 dark:text-slate-300">
                    {item.competencies.map((line) => (
                      <li key={line}>- {line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card rounded-2xl p-6">
        <h3 className="text-lg font-semibold">Różnorodność całego kursu</h3>
        <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
          <p>- Systemy komercyjne i open-source.</p>
          <p>- Narzędzia webowe i lokalne.</p>
          <p>- Rozwiązania generatywne i analityczne.</p>
          <p>- Interfejsy graficzne i środowiska programistyczne.</p>
          <p>- Analiza jakościowa i ilościowa.</p>
          <p>- Kurs ekosystemu narzędzi, nie jednej platformy.</p>
        </div>
      </section>

      <section className="card rounded-2xl p-6">
        <h3 className="text-lg font-semibold">Szybki podgląd wszystkich zajęć</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setModuleFilter('all')}
            className={`rounded-full border px-3 py-1 text-sm transition ${
              moduleFilter === 'all'
                ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200'
                : 'border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200'
            }`}
          >
            Wszystkie
          </button>
          {modules.map((module) => (
            <button
              key={module.id}
              type="button"
              onClick={() => setModuleFilter(module.id)}
              className={`rounded-full border px-3 py-1 text-sm transition ${
                moduleFilter === module.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200'
                  : 'border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              {module.title.split(':')[0]}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {filteredLessons.map((lesson) => (
            <button
              key={lesson.id}
              type="button"
              onClick={() => onOpenLesson(lesson.id)}
              className={`rounded-lg border px-3 py-1.5 text-sm transition ${
                lesson.id === currentLesson
                  ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200'
                  : 'border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              {lesson.id}. {lesson.title}
            </button>
          ))}
        </div>
      </section>
    </article>
  )
}
