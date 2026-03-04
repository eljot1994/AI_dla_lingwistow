export function LessonTwoPage() {
  const learningOutcomes = [
    'Rozróżniasz pojęcia: AI, ML, deep learning, LLM i AI generatywna.',
    'Rozumiesz, dlaczego modele językowe halucynują i jak ograniczać to ryzyko.',
    'Potrafisz zaprojektować prompt iteracyjnie: od wersji słabej do wersji mierzalnej.',
    'Umiesz oceniać odpowiedzi modelu według stałej rubryki jakości.',
    'Masz gotowy workflow do pracy badawczej i dydaktycznej z modelami językowymi.',
  ]

  const plan = [
    { time: '0-10 min', title: 'Kontrakt zajęć', details: 'Co dzisiaj robimy: teoria + laboratorium promptów + rubryka oceny.' },
    { time: '10-30 min', title: 'Część naukowa', details: 'AI, ML, sieci neuronowe, transformers, tokenizacja, inferencja.' },
    { time: '30-40 min', title: 'Błędy modeli', details: 'Halucynacje, pozorna pewność, bias, utrata kontekstu, drift instrukcji.' },
    { time: '40-70 min', title: 'Warsztat promptowania', details: '6 iteracji promptu + analiza, co było złe i co poprawiamy.' },
    { time: '70-85 min', title: 'Ewaluacja jakości', details: 'Skoring odpowiedzi i porównanie wariantów promptu.' },
    { time: '85-90 min', title: 'Domknięcie', details: 'Checklist, szablony i zadanie do samodzielnej pracy.' },
  ]

  const scientificCards = [
    {
      title: 'AI (poziom systemowy)',
      body: 'AI opisuje cały system podejmowania decyzji, a nie tylko sam model. Obejmuje dane wejściowe, model, logikę biznesową, walidację i sposób użycia wyniku.',
      note: 'W dydaktyce warto oddzielać „model” od „systemu”, bo błędy często powstają poza modelem.',
      tone: 'border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20',
    },
    {
      title: 'ML (poziom statystyczny)',
      body: 'W ML model minimalizuje błąd względem funkcji celu. Oznacza to, że „dobroć” modelu jest zawsze zależna od metryki i danych treningowych.',
      note: 'Ta sama architektura może być dobra lub zła zależnie od definicji celu i jakości etykiet.',
      tone: 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20',
    },
    {
      title: 'Deep learning (poziom reprezentacji)',
      body: 'Sieci neuronowe uczą się reprezentacji pośrednich: od prostych sygnałów do cech abstrakcyjnych. Dlatego lepiej skalują się na złożonych zadaniach językowych.',
      note: 'Kluczowy zysk: mniej ręcznej inżynierii cech, ale większy koszt danych i obliczeń.',
      tone: 'border-cyan-200 bg-cyan-50/60 dark:border-cyan-900 dark:bg-cyan-950/20',
    },
    {
      title: 'LLM (poziom generowania sekwencji)',
      body: 'LLM generuje odpowiedź token po tokenie. Jakość końcowa zależy od: jakości promptu, długości kontekstu, strategii dekodowania i mechanizmów kontroli.',
      note: 'Płynność i pewny ton odpowiedzi nie są dowodem poprawności faktów.',
      tone: 'border-violet-200 bg-violet-50/60 dark:border-violet-900 dark:bg-violet-950/20',
    },
  ]

  const pipeline = [
    ['1. Tokenizacja', 'Tekst dzielony jest na tokeny; model nie „widzi” słów jak człowiek, tylko sekwencje symboli.'],
    ['2. Embeddingi', 'Tokeny zamieniane są na wektory liczbowe reprezentujące cechy kontekstowe.'],
    ['3. Attention', 'Mechanizm attention waży, które tokeny kontekstu są ważniejsze przy generowaniu kolejnego tokenu.'],
    ['4. Predykcja', 'Model wylicza rozkład prawdopodobieństwa następnego tokenu i wybiera kandydat.'],
    ['5. Dekodowanie', 'Strategia dekodowania (np. temperatura) wpływa na kreatywność vs stabilność odpowiedzi.'],
    ['6. Post-processing', 'Filtry bezpieczeństwa i instrukcje systemowe mogą modyfikować odpowiedź końcową.'],
  ]

  const limits = [
    ['Halucynacje', 'Model tworzy poprawnie brzmiące, ale niepotwierdzone informacje.'],
    ['Bias danych', 'Model może wzmacniać nierówności i uproszczenia obecne w danych treningowych.'],
    ['Overconfidence', 'Styl odpowiedzi może sugerować pewność mimo słabych podstaw.'],
    ['Prompt sensitivity', 'Małe zmiany instrukcji mogą znacząco zmienić wynik.'],
    ['Context window', 'Po przekroczeniu okna kontekstu model traci część informacji wejściowych.'],
  ]

  const algorithmEvolution = [
    {
      name: 'AI symboliczna / regułowa',
      from: 'Punkt wyjścia',
      examples: ['Systemy ekspertowe', 'Reguły if-then', 'Logika formalna'],
      pluses: ['Wysoka interpretowalność', 'Stabilne wyniki w wąskich zadaniach', 'Łatwe audytowanie decyzji'],
      minuses: ['Słaba skalowalność', 'Dużo pracy ręcznej', 'Kruchość przy niejednoznacznym języku naturalnym'],
      difference: 'Wiedza jest wpisana ręcznie, a nie uczona z danych.',
      tone: 'border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/40',
      dot: 'bg-slate-500',
    },
    {
      name: 'Klasyczne uczenie maszynowe',
      from: 'Powstało z: potrzeby uczenia na danych zamiast ręcznych reguł',
      examples: ['Regresja logistyczna', 'SVM', 'Drzewa decyzyjne / random forest'],
      pluses: ['Dobre na mniejszych zbiorach', 'Szybsze trenowanie', 'Relatywnie dobre wyjaśnianie modelu'],
      minuses: ['Wymaga inżynierii cech', 'Słabsze na złożonym języku', 'Mniej elastyczne w generowaniu'],
      difference: 'Model uczy granice decyzyjne, ale zwykle na ręcznie przygotowanych cechach.',
      tone: 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20',
      dot: 'bg-emerald-500',
    },
    {
      name: 'Deep Learning (sieci neuronowe)',
      from: 'Powstało z: ograniczeń klasycznego ML dla złożonych danych',
      examples: ['MLP', 'CNN', 'RNN/LSTM'],
      pluses: ['Uczenie reprezentacji automatycznie', 'Wysoka skuteczność na dużych danych', 'Dobre modelowanie sekwencji'],
      minuses: ['Wysokie koszty obliczeń', 'Mniejsza interpretowalność', 'Wrażliwość na jakość danych'],
      difference: 'Cechy nie są ręcznie projektowane; model uczy je sam warstwa po warstwie.',
      tone: 'border-cyan-200 bg-cyan-50/60 dark:border-cyan-900 dark:bg-cyan-950/20',
      dot: 'bg-cyan-500',
    },
    {
      name: 'Transformery i LLM',
      from: 'Powstało z: potrzeby lepszego modelowania długiego kontekstu',
      examples: ['BERT (encoder)', 'GPT (decoder)', 'Modele instrukcyjne'],
      pluses: ['Bardzo dobra praca na kontekście', 'Transfer wiedzy między zadaniami', 'Silne generowanie tekstu'],
      minuses: ['Ryzyko halucynacji', 'Duży koszt treningu/inferencji', 'Duża zależność od jakości promptu'],
      difference: 'Mechanizm attention zastępuje starsze podejścia sekwencyjne i skaluje NLP na duże korpusy.',
      tone: 'border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20',
      dot: 'bg-blue-500',
    },
  ]

  const historyMilestones = [
    {
      period: '1950-1980',
      label: 'AI symboliczna',
      detail: 'Dominują reguły i systemy ekspertowe; duży nacisk na logikę formalną.',
    },
    {
      period: '1990-2010',
      label: 'Klasyczne ML',
      detail: 'Rozkwit modeli statystycznych i uczenia nadzorowanego na cechach ręcznie projektowanych.',
    },
    {
      period: '2012-2017',
      label: 'Skok deep learning',
      detail: 'Sieci neuronowe osiągają przełomy dzięki większym danym i mocy obliczeniowej.',
    },
    {
      period: '2017-2020',
      label: 'Era transformerów',
      detail: 'Attention zmienia NLP; modele lepiej skalują kontekst i transfer wiedzy.',
    },
    {
      period: '2020-obecnie',
      label: 'LLM i AI generatywna',
      detail: 'Modele instrukcyjne i chatowe stają się narzędziami codziennej pracy badawczej i dydaktycznej.',
    },
  ]

  const aiDefinitions = [
    'SI/AI to inteligencja wykazywana przez urządzenia obliczeniowe; w informatyce oznacza też tworzenie modeli i programów symulujących część zachowań inteligentnych.',
    'W praktyce dydaktycznej warto rozróżniać dwa poziomy: SI jako hipotetyczną inteligencję techniczną oraz SI jako technologię i obszar badań naukowych.',
    'Termin „sztuczna inteligencja” przypisuje się Johnowi McCarthy’emu (konferencja Dartmouth, 1956).',
  ]

  const applicationDomains = [
    {
      area: 'Medycyna',
      use: 'Diagnostyka obrazowa, przewidywanie ryzyk, wsparcie decyzji klinicznych.',
      bestFit: 'Deep learning + transformery',
      caution: 'Wysokie wymagania jakości danych i odpowiedzialności za błąd.',
    },
    {
      area: 'Edukacja i język',
      use: 'Tłumaczenie, streszczanie, upraszczanie tekstu, feedback dydaktyczny.',
      bestFit: 'LLM / modele instrukcyjne',
      caution: 'Ryzyko halucynacji i pozornej pewności treści.',
    },
    {
      area: 'Przemysł i biznes',
      use: 'Predykcja popytu, detekcja anomalii, automatyzacja procesów.',
      bestFit: 'Klasyczne ML + deep learning',
      caution: 'Bias danych historycznych może utrwalać błędne decyzje.',
    },
    {
      area: 'Sektor publiczny i bezpieczeństwo',
      use: 'Analiza dokumentów, wsparcie decyzyjne, monitorowanie zdarzeń.',
      bestFit: 'Hybrydy reguł + ML',
      caution: 'Konieczność audytowalności i zgodności z regulacjami.',
    },
  ]

  const paradigmComparison = [
    ['Nadzorowane (supervised)', 'Model uczy się na danych z etykietą (wejście -> poprawna odpowiedź).', 'Klasyfikacja sentymentu na oznaczonym korpusie.'],
    ['Nienadzorowane (unsupervised)', 'Model szuka struktur bez etykiet.', 'Grupowanie tekstów tematycznie, wykrywanie podobieństw.'],
    ['Samonadzorowane (self-supervised)', 'Model tworzy cel treningowy z samych danych.', 'Predykcja brakujących tokenów podczas pretreningu LLM.'],
    ['Uczenie przez wzmacnianie (RL)', 'Model optymalizuje strategię przez nagrody/kary.', 'Dostrajanie zachowań modelu do preferencji użytkownika.'],
  ]

  const decisionMatrix = [
    {
      task: 'Jasne reguły i mała zmienność danych',
      recommended: 'Modele regułowe',
      why: 'Najwyższa kontrola i interpretowalność, niski narzut implementacyjny dla prostych zadań.',
      risk: 'Szybko staje się kruche przy wyjątkach językowych.',
    },
    {
      task: 'Klasyfikacja tekstu na małych/średnich zbiorach',
      recommended: 'Klasyczne ML',
      why: 'Dobra relacja jakości do kosztu, szybkie eksperymenty i porównywalne metryki.',
      risk: 'Wymaga dobrego przygotowania cech i danych.',
    },
    {
      task: 'Złożone wzorce sekwencyjne i multimodalność',
      recommended: 'Deep Learning',
      why: 'Lepsze wychwytywanie zależności nieliniowych i cech ukrytych.',
      risk: 'Wysoki koszt trenowania i mniejsza interpretowalność.',
    },
    {
      task: 'Generowanie, transformacja i dialog w języku naturalnym',
      recommended: 'Transformery / LLM',
      why: 'Najlepsza elastyczność językowa i transfer między zadaniami.',
      risk: 'Halucynacje; konieczna walidacja i dobre promptowanie.',
    },
  ]

  const anatomy = [
    ['Cel zadania', 'Co dokładnie ma powstać?'],
    ['Odbiorca', 'Dla kogo jest odpowiedź i jaki poziom języka?'],
    ['Zakres', 'Jakie elementy muszą się znaleźć?'],
    ['Format', 'Lista, tabela, raport, JSON, liczba punktów, długość.'],
    ['Kryteria jakości', 'Po czym poznamy, że odpowiedź jest dobra?'],
    ['Ograniczenia', 'Czego model ma unikać, jak oznaczać niepewność?'],
  ]

  const iterations = [
    {
      label: 'Iteracja 0 (bardzo słaba)',
      prompt: 'Napisz coś o sztucznej inteligencji.',
      diagnosis: 'Brak celu, odbiorcy, zakresu, formatu i kryteriów oceny. Wynik będzie losowo ogólny.',
      improvement: 'Dodaj cel i grupę docelową.',
      score: '1/5',
    },
    {
      label: 'Iteracja 1',
      prompt: 'Wyjaśnij AI studentowi.',
      diagnosis: 'Nadal nie wiemy: jaki student, jaki poziom trudności, jaka długość, jaki rezultat.',
      improvement: 'Doprecyzuj kontekst odbiorcy i format odpowiedzi.',
      score: '2/5',
    },
    {
      label: 'Iteracja 2',
      prompt: 'Wyjaśnij AI studentowi filologii w 5 punktach.',
      diagnosis: 'Jest postęp, ale zakres merytoryczny pozostaje nieokreślony.',
      improvement: 'Wymuś konkretne pojęcia i przykłady językowe.',
      score: '3/5',
    },
    {
      label: 'Iteracja 3',
      prompt:
        'Wyjaśnij: AI, ML, sieci neuronowe i AI generatywną. Daj po 1 przykładzie językowym dla każdego pojęcia.',
      diagnosis: 'Dobra struktura treści, ale brak kontroli stylu, długości i niepewności.',
      improvement: 'Dodaj poziom języka, limit, format i regułę oznaczania niepewności.',
      score: '4/5',
    },
    {
      label: 'Iteracja 4',
      prompt:
        'Napisz dla studenta filologii (poziom B1): wyjaśnij AI, ML, sieci neuronowe i AI generatywną. Użyj 5 punktów + mini-tabeli różnic. Maks. 220 słów. Bez żargonu. Oznacz brak pewności jako [NIEPEWNE].',
      diagnosis: 'Prompt operacyjny: ma cel, odbiorcę, zakres, format, limit i politykę niepewności.',
      improvement: 'Dodaj kontrolę źródeł i autoweryfikację odpowiedzi.',
      score: '4.5/5',
    },
    {
      label: 'Iteracja 5 (wersja laboratoryjna)',
      prompt:
        'Wykonaj zadanie jak wyżej, a na końcu dodaj sekcję "Samokontrola": (1) co jest pewne, (2) co może być niepewne, (3) 2 pytania kontrolne dla użytkownika.',
      diagnosis: 'Wersja do pracy naukowej: minimalizuje ryzyko ślepego zaufania i wspiera walidację.',
      improvement: 'Ta wersja jest punktem odniesienia do porównań między modelami.',
      score: '5/5',
    },
  ]

  const patterns = [
    ['Prompt z rolą', 'Model otrzymuje rolę eksperta (np. „jesteś dydaktykiem akademickim”).'],
    ['Prompt z rubryką', 'Na wejściu podajesz kryteria oceny odpowiedzi.'],
    ['Prompt kontrastowy', 'Prosisz o wersję dobrą i słabą + porównanie.'],
    ['Prompt z ograniczeniami', 'Limit długości, poziom języka, zakazane elementy.'],
    ['Prompt z samokontrolą', 'Model ma wskazać punkty niepewne i luki w odpowiedzi.'],
  ]

  const antiPatterns = [
    'Zbyt ogólne polecenia („napisz coś o…”).',
    'Mieszanie wielu zadań bez priorytetów i formatu wyjścia.',
    'Brak informacji o odbiorcy, celu i poziomie szczegółu.',
    'Brak kryteriów jakości, przez co nie da się porównać odpowiedzi.',
    'Brak wymogu oznaczania niepewności i źródeł twierdzeń.',
  ]

  const rubric = [
    ['Trafność', 'Czy odpowiedź realizuje dokładnie zadanie?'],
    ['Kompletność', 'Czy zawiera wszystkie wymagane elementy?'],
    ['Precyzja', 'Czy pojęcia są użyte poprawnie i bez skrótów myślowych?'],
    ['Czytelność', 'Czy forma i język pasują do odbiorcy?'],
    ['Rzetelność', 'Czy model oznacza niepewność i unika konfabulacji?'],
    ['Użyteczność', 'Czy wynik da się od razu wykorzystać w pracy studenta?'],
  ]

  const labProtocol = [
    'Wybierz jeden temat językoznawczy (np. upraszczanie tekstu urzędowego).',
    'Przygotuj prompt bazowy (celowo niedoskonały).',
    'Uruchom 5-6 iteracji; po każdej zapisz: co było słabe, co poprawiono, jaki efekt.',
    'Każdą odpowiedź oceń tą samą rubryką 1-5.',
    'Na końcu porównaj najlepszą iterację z pierwszą i opisz zysk jakościowy.',
  ]

  const templates = [
    {
      name: 'Szablon A: Wyjaśnienie pojęć',
      text:
        'Wyjaśnij [TEMAT] dla [ODBIORCA, POZIOM]. Użyj [FORMAT], max [LIMIT]. Zawrzyj [OBOWIĄZKOWE ELEMENTY]. Unikaj [OGRANICZENIA]. Oznacz niepewność jako [ETYKIETA].',
    },
    {
      name: 'Szablon B: Analiza tekstu',
      text:
        'Przeanalizuj tekst pod kątem [KRYTERIA]. Zwróć wynik jako: (1) wnioski, (2) cytaty źródłowe, (3) ryzyka błędu, (4) pytania doprecyzowujące.',
    },
    {
      name: 'Szablon C: Iteracja naprawcza',
      text:
        'To była poprzednia odpowiedź: [WKLEJ]. Oceń ją w skali 1-5 w kryteriach [LISTA]. Następnie popraw odpowiedź i opisz 3 konkretne zmiany.',
    },
  ]

  const homework = [
    'Wybierz 1 zagadnienie językowe związane z Twoim mini-projektem.',
    'Zrób 6 iteracji promptu od wersji słabej do wersji laboratoryjnej.',
    'Dla każdej iteracji zapisz diagnozę błędów i plan poprawy.',
    'Oceń wszystkie iteracje rubryką z zajęć i wskaż największy skok jakości.',
    'Przygotuj krótkie podsumowanie: czego nauczyło Cię promptowanie iteracyjne.',
  ]

  return (
    <article className="animate-fadeSlideIn space-y-8">
      <section className="card relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(2,132,199,0.18),transparent_40%),radial-gradient(circle_at_100%_10%,rgba(14,165,233,0.2),transparent_35%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">Zajęcia 2 | Fundamenty AI i promptowanie naukowe</p>
          <h2 className="mt-3 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Od teorii modeli językowych do praktyki: tutorial promptowania iteracyjnego
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Te zajęcia łączą podstawy naukowe działania modeli językowych z praktyką warsztatową. Najpierw rozumiesz,
            jak model generuje tekst i skąd biorą się błędy, a potem krok po kroku budujesz prompty o rosnącej jakości.
          </p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {learningOutcomes.map((outcome) => (
              <p key={outcome} className="rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
                {outcome}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Plan spotkania (timeline)</h3>
        <div className="mt-6 space-y-3">
          {plan.map((item, index) => (
            <div key={item.time} className="relative rounded-xl border border-slate-200 bg-white p-4 pl-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
              <span className="absolute left-0 top-4 h-10 w-1 rounded-r bg-blue-500" />
              <div className="flex flex-wrap items-center gap-2">
                <p className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-200">{item.time}</p>
                <p className="text-sm font-semibold">{index + 1}. {item.title}</p>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Część naukowa: jak działa model językowy</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {scientificCards.map((item) => (
            <article key={item.title} className={`card rounded-2xl p-6 sm:p-7 ${item.tone}`}>
              <h4 className="text-base font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{item.body}</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="font-semibold">Ważne:</span> {item.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Pipeline generowania odpowiedzi</h3>
          <div className="mt-4 grid gap-2">
            {pipeline.map(([name, desc]) => (
              <div key={name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <span className="font-semibold">{name}:</span> {desc}
              </div>
            ))}
          </div>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Główne ograniczenia modeli</h3>
          <div className="mt-4 grid gap-2">
            {limits.map(([name, desc]) => (
              <div key={name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <span className="font-semibold">{name}:</span> {desc}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Historia, podział i zastosowania AI (mapa dydaktyczna)</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Jedna sekcja do prowadzenia: najpierw definicja, potem historia, następnie drzewko rozwoju algorytmów i na końcu zastosowania.
        </p>

        <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/70 p-4 dark:border-blue-900 dark:bg-blue-950/25">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Definicje (na podstawie Wikipedii PL)</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200">
            {aiDefinitions.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="text-base font-semibold">Rys historyczny</h4>
          <div className="mt-3 space-y-2">
            {historyMilestones.map((item, index) => (
              <div key={item.period} className="relative rounded-xl border border-slate-200 px-4 py-3 dark:border-slate-700">
                <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-blue-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-600 dark:text-blue-300">{item.period}</p>
                <p className="mt-1 text-sm font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
                {index < historyMilestones.length - 1 ? <p className="mt-2 text-xs text-slate-500">kolejny etap</p> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
          <div className="mx-auto w-fit rounded-xl border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-200">
            Sztuczna inteligencja (AI)
          </div>

          <div className="mt-2 space-y-3">
            {algorithmEvolution.map((node, index) => (
              <div key={node.name}>
                <article className={`rounded-xl border p-4 ${node.tone}`}>
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${node.dot}`} />
                    <h4 className="text-sm font-semibold">{node.name}</h4>
                    <span className="ml-auto rounded-full border border-slate-300 px-2 py-0.5 text-[11px] dark:border-slate-700">Poziom {index + 1}</span>
                  </div>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-slate-500">{node.from}</p>
                  <div className="mt-3 grid gap-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900/60">
                      <p className="font-semibold">Przykłady</p>
                      <ul className="mt-1 space-y-1 text-slate-600 dark:text-slate-300">
                        {node.examples.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 px-3 py-2 text-sm dark:border-emerald-900 dark:bg-emerald-950/25">
                      <p className="font-semibold text-emerald-700 dark:text-emerald-300">Plusy</p>
                      <ul className="mt-1 space-y-1 text-slate-700 dark:text-slate-200">
                        {node.pluses.map((item) => (
                          <li key={item}>+ {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border border-rose-200 bg-rose-50/70 px-3 py-2 text-sm dark:border-rose-900 dark:bg-rose-950/25">
                      <p className="font-semibold text-rose-700 dark:text-rose-300">Minusy</p>
                      <ul className="mt-1 space-y-1 text-slate-700 dark:text-slate-200">
                        {node.minuses.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                    <span className="font-semibold">Kluczowa różnica:</span> {node.difference}
                  </p>
                </article>
                {index < algorithmEvolution.length - 1 ? (
                  <div className="mx-auto flex w-fit items-center gap-2 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                    <span className="h-5 w-px bg-slate-300 dark:bg-slate-600" />
                    <span>ewolucja</span>
                    <span>↓</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
            <h4 className="text-sm font-semibold">Grafika: ewolucja architektur NLP</h4>
            <div className="mt-3 rounded-xl border border-slate-200 p-3 dark:border-slate-700">
            <svg viewBox="0 0 720 300" className="w-full" role="img" aria-label="Schemat przejścia od modeli regułowych do LLM">
              <rect x="20" y="110" width="130" height="70" rx="10" fill="#e2e8f0" />
              <text x="85" y="138" textAnchor="middle" fontSize="14" fill="#0f172a">Reguly</text>
              <text x="85" y="158" textAnchor="middle" fontSize="12" fill="#334155">symboliczne</text>

              <rect x="200" y="110" width="130" height="70" rx="10" fill="#bbf7d0" />
              <text x="265" y="138" textAnchor="middle" fontSize="14" fill="#14532d">ML</text>
              <text x="265" y="158" textAnchor="middle" fontSize="12" fill="#166534">klasyczne</text>

              <rect x="380" y="110" width="130" height="70" rx="10" fill="#a5f3fc" />
              <text x="445" y="138" textAnchor="middle" fontSize="14" fill="#164e63">Deep</text>
              <text x="445" y="158" textAnchor="middle" fontSize="12" fill="#155e75">Learning</text>

              <rect x="560" y="110" width="130" height="70" rx="10" fill="#bfdbfe" />
              <text x="625" y="138" textAnchor="middle" fontSize="14" fill="#1e3a8a">Transformery</text>
              <text x="625" y="158" textAnchor="middle" fontSize="12" fill="#1d4ed8">LLM</text>

              <line x1="150" y1="145" x2="200" y2="145" stroke="#64748b" strokeWidth="3" />
              <polygon points="200,145 190,139 190,151" fill="#64748b" />
              <line x1="330" y1="145" x2="380" y2="145" stroke="#64748b" strokeWidth="3" />
              <polygon points="380,145 370,139 370,151" fill="#64748b" />
              <line x1="510" y1="145" x2="560" y2="145" stroke="#64748b" strokeWidth="3" />
              <polygon points="560,145 550,139 550,151" fill="#64748b" />

              <text x="175" y="95" textAnchor="middle" fontSize="11" fill="#475569">wieksza adaptacja</text>
              <text x="355" y="95" textAnchor="middle" fontSize="11" fill="#475569">wiecej danych</text>
              <text x="535" y="95" textAnchor="middle" fontSize="11" fill="#475569">lepszy kontekst</text>
            </svg>
            </div>
          </article>
          <article className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
            <h4 className="text-sm font-semibold">Grafika: prompt do odpowiedzi</h4>
            <div className="mt-3 rounded-xl border border-slate-200 p-3 dark:border-slate-700">
            <svg viewBox="0 0 720 220" className="w-full" role="img" aria-label="Schemat prompt do odpowiedzi">
              <rect x="20" y="80" width="140" height="60" rx="10" fill="#dbeafe" />
              <text x="90" y="114" textAnchor="middle" fontSize="13" fill="#1e3a8a">Prompt</text>

              <rect x="290" y="80" width="140" height="60" rx="10" fill="#e2e8f0" />
              <text x="360" y="114" textAnchor="middle" fontSize="13" fill="#0f172a">Model</text>

              <rect x="560" y="80" width="140" height="60" rx="10" fill="#dcfce7" />
              <text x="630" y="114" textAnchor="middle" fontSize="13" fill="#166534">Odpowiedz</text>

              <line x1="160" y1="110" x2="290" y2="110" stroke="#64748b" strokeWidth="3" />
              <polygon points="290,110 280,104 280,116" fill="#64748b" />
              <line x1="430" y1="110" x2="560" y2="110" stroke="#64748b" strokeWidth="3" />
              <polygon points="560,110 550,104 550,116" fill="#64748b" />

              <text x="225" y="95" textAnchor="middle" fontSize="11" fill="#475569">instrukcja + kontekst</text>
              <text x="495" y="95" textAnchor="middle" fontSize="11" fill="#475569">dekodowanie tokenow</text>
            </svg>
            </div>
          </article>
        </div>

        <div className="mt-4">
          <h4 className="text-base font-semibold">Zastosowania: gdzie używać których rodzin modeli</h4>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {applicationDomains.map((item) => (
              <article key={item.area} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <p className="text-sm font-semibold">{item.area}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Zastosowanie:</span> {item.use}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Najczęściej pasuje:</span> {item.bestFit}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Uwaga:</span> {item.caution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Paradygmaty uczenia</h3>
          <div className="mt-4 space-y-2">
            {paradigmComparison.map(([name, desc, example]) => (
              <div key={name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <p>
                  <span className="font-semibold">{name}:</span> {desc}
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Przykład:</span> {example}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Macierz decyzyjna doboru modelu</h3>
          <div className="mt-4 space-y-2">
            {decisionMatrix.map((item) => (
              <article key={item.task} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <p>
                  <span className="font-semibold">Zadanie:</span> {item.task}
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Rekomendacja:</span> {item.recommended}
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Dlaczego:</span> {item.why}
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Ryzyko:</span> {item.risk}
                </p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Anatomia dobrego promptu</h3>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {anatomy.map(([name, desc]) => (
            <div key={name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
              <span className="font-semibold">{name}:</span> {desc}
            </div>
          ))}
        </div>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Tutorial: iteracyjne poprawianie promptu (0 do 5)</h3>
        <div className="mt-4 space-y-3">
          {iterations.map((item) => (
            <article key={item.label} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">{item.label}</p>
                <p className="rounded-full border border-slate-300 px-2 py-0.5 text-xs dark:border-slate-700">Jakość: {item.score}</p>
              </div>
              <p className="mt-2 text-sm">
                <span className="font-semibold">Prompt:</span> {item.prompt}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-800 dark:text-slate-100">Diagnoza:</span> {item.diagnosis}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-800 dark:text-slate-100">Następna poprawka:</span> {item.improvement}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Wzorce skutecznych promptów</h3>
          <div className="mt-4 space-y-2">
            {patterns.map(([name, desc]) => (
              <div key={name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <span className="font-semibold">{name}:</span> {desc}
              </div>
            ))}
          </div>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Antywzorce (czego unikać)</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {antiPatterns.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Rubryka oceny odpowiedzi (1-5)</h3>
          <div className="mt-4 space-y-2">
            {rubric.map(([name, desc]) => (
              <div key={name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <span className="font-semibold">{name}:</span> {desc}
              </div>
            ))}
          </div>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Protokół laboratorium promptowego</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {labProtocol.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Gotowe szablony promptów</h3>
        <div className="mt-4 space-y-3">
          {templates.map((template) => (
            <article key={template.name} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <p className="text-sm font-semibold">{template.name}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{template.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Zadanie po zajęciach</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {homework.map((line) => (
            <li key={line}>- {line}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
