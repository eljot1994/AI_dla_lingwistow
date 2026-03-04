export function LessonOnePage() {
  const meetingPlan = [
    { time: '0-10 min', title: 'Otwarcie i cele kursu', details: 'Czym jest fakultet i jakie kompetencje rozwija.' },
    {
      time: '10-30 min',
      title: 'Mapa semestru: 3 moduły, 15 zajęć',
      details: 'Przegląd logiki kursu i relacji między modułami oraz punktów kontrolnych.',
    },
    {
      time: '30-45 min',
      title: 'Zakres narzędzi i sposób pracy',
      details: 'Systemy komercyjne/open-source, web/lokalne, praca indywidualna i zespołowa.',
    },
    {
      time: '45-65 min',
      title: 'Forma zaliczenia: mini-projekt',
      details: 'Jeden problem językowy, kilka metod, porównanie wyników i ograniczeń.',
    },
    {
      time: '65-80 min',
      title: 'Mini-demo + kontrast jakości',
      details: 'Porównanie dwóch odpowiedzi AI na to samo polecenie i krótka analiza błędów.',
    },
    {
      time: '80-90 min',
      title: 'Q&A i zadanie startowe',
      details: 'Ustalenie tematu mini-projektu i kryteriów dokumentacji pracy.',
    },
  ]

  const workRules = [
    'Każdy wynik AI sprawdzamy krytycznie i porównujemy ze źródłem.',
    'Dokumentujemy, jakich promptów i narzędzi użyto (wersje, daty, kontekst).',
    'Wnioski opieramy na jakości odpowiedzi, nie na deklaracjach narzędzia.',
    'Uwzględniamy ograniczenia etyczne, metodologiczne i prywatnościowe.',
    'W mini-projekcie premiujemy różnorodność metod, nie liczbę podobnych wyników.',
  ]

  const grading = [
    ['Wybór problemu językowego', 'obowiązkowe', 'Jeden konkretny problem i uzasadnienie, dlaczego jest wart analizy.'],
    ['Kilka rozwiązań AI', 'obowiązkowe', 'To samo zadanie wykonane różnymi narzędziami lub strategiami.'],
    ['Porównanie rezultatów', 'obowiązkowe', 'Analiza jakości, błędów, uproszczeń i ograniczeń każdego podejścia.'],
    ['Transparentna dokumentacja', 'wysoka waga', 'Jasny opis: dane wejściowe, prompty, kryteria oceny, decyzje.'],
    ['Unikatowe wyniki', 'krytyczne', 'Usuwamy duplikaty; liczą się tylko rzeczywiście różne rozwiązania.'],
  ]

  const moduleOverview = [
    {
      id: '1',
      title: 'Moduł I: AI jako środowisko pracy',
      desc: 'Nawyki, strategie, krytyczne korzystanie z narzędzi i projektowanie promptów.',
      deliverable: 'Szybkie prototypy z kontrolą jakości odpowiedzi.',
      tone: 'border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20',
    },
    {
      id: '2',
      title: 'Moduł II: AI jako narzędzie analizy języka',
      desc: 'Tłumaczenie, transkrypcja, analiza jakościowa i ilościowa tekstu.',
      deliverable: 'Porównanie metod analizy na wspólnym materiale.',
      tone: 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20',
    },
    {
      id: '3',
      title: 'Moduł III: AI jako technologia i metodologia',
      desc: 'Infrastruktura, dane, ograniczenia modeli i rzetelne porównania.',
      deliverable: 'Świadomy wybór narzędzia i uzasadnienie metodologiczne.',
      tone: 'border-rose-200 bg-rose-50/60 dark:border-rose-900 dark:bg-rose-950/20',
    },
  ]

  const riskRegister = [
    ['Halucynacje', 'Odpowiedź brzmi wiarygodnie, ale zawiera fakty bez potwierdzenia.', 'Weryfikacja źródeł i oznaczanie niepewności.'],
    ['Bias danych', 'Model reprodukuje uproszczenia lub stereotypy.', 'Porównanie wyników między narzędziami i wersjami promptu.'],
    ['Nadmierne zaufanie', 'Użytkownik nie sprawdza jakości, bo odpowiedź jest „płynna”.', 'Stała rubryka oceny odpowiedzi.'],
    ['Niska powtarzalność', 'Trudno odtworzyć wynik i argumentację.', 'Dokumentacja promptów, ustawień i kryteriów.'],
  ]

  const demoScript = [
    'Pokaż dwie odpowiedzi AI na ten sam prompt (jedna ogólna, druga precyzyjna).',
    'Zadaj grupie pytanie: która odpowiedź jest bardziej użyteczna i dlaczego?',
    'Wspólnie oceńcie obie odpowiedzi w 4 kryteriach: trafność, kompletność, styl, ryzyko błędów.',
    'Podsumuj: lepszy prompt to mniej poprawek, nie tylko ładniejszy tekst.',
  ]

  const afterClass = [
    'Rozumiesz strukturę kursu i kryteria oceny mini-projektu.',
    'Wiesz, jak dokumentować pracę z AI od pierwszych zajęć.',
    'Masz gotowość do Zajęć 2: fundamenty AI + prompty iteracyjne.',
    'Masz wstępny temat własnego mini-projektu i plan pierwszej iteracji.',
  ]

  return (
    <article className="animate-fadeSlideIn space-y-8">
      <section className="card relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(59,130,246,0.22),transparent_38%),radial-gradient(circle_at_92%_10%,rgba(14,165,233,0.17),transparent_30%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">Zajęcia 1 | Spotkanie organizacyjne</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">Wprowadzenie do kursu i kontrakt pracy</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Zajęcia wstępne porządkują strukturę semestru, zasady pracy i kryteria oceny. Ustalamy wspólny standard jakości
            oraz sposób dokumentacji, który będzie obowiązywał przez cały kurs.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-blue-300/60 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/50 dark:bg-blue-500/10 dark:text-blue-200">
              90 minut
            </span>
            <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
              Start semestru
            </span>
            <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
              Ustawienie metodologii
            </span>
          </div>
        </div>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Plan spotkania (90 min)</h3>
        <div className="mt-5 space-y-3">
          {meetingPlan.map((item) => (
            <div key={item.time} className="grid gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700 sm:grid-cols-[110px_1fr_1fr]">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">{item.time}</p>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Kontrakt pracy</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {workRules.map((rule) => (
              <li key={rule} className="rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700">
                {rule}
              </li>
            ))}
          </ul>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Forma zaliczenia</h3>
          <div className="mt-4 space-y-2">
            {grading.map(([name, weight, desc]) => (
              <div key={name} className="grid gap-2 rounded-xl border border-slate-200 p-3 dark:border-slate-700 sm:grid-cols-[1fr_100px]">
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
                </div>
                <p className="text-right text-xs font-semibold uppercase tracking-[0.08em] text-blue-600 dark:text-blue-300">{weight}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Mapa kursu</h3>
        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {moduleOverview.map((module) => (
            <article key={module.id} className={`rounded-xl border p-4 ${module.tone}`}>
              <p className="text-sm font-semibold">{module.title}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{module.desc}</p>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-800 dark:text-slate-100">Efekt modułu:</span> {module.deliverable}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Rejestr ryzyk na start</h3>
          <div className="mt-4 space-y-2">
            {riskRegister.map(([risk, desc, mitigation]) => (
              <div key={risk} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <p className="font-semibold">{risk}</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{desc}</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Jak przeciwdziałamy:</span> {mitigation}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Scenariusz mini-demo</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {demoScript.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Po tych zajęciach</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {afterClass.map((line) => (
            <li key={line}>- {line}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
