export type Module = {
  id: string
  title: string
  subtitle: string
  lessonRange: [number, number]
  colorClass: string
}

export type Lesson = {
  id: number
  title: string
  moduleId: string
  theme: string
  goals: string[]
  tools: string[]
  exercises: string[]
  reflection: string[]
}

export const modules: Module[] = [
  {
    id: 'm1',
    title: 'Moduł I: AI jako środowisko pracy',
    subtitle: 'Nawyki, strategie i krytyczne korzystanie z narzędzi AI',
    lessonRange: [1, 5],
    colorClass: 'from-blue-500/20 to-sky-400/10',
  },
  {
    id: 'm2',
    title: 'Moduł II: AI jako narzędzie analizy języka',
    subtitle: 'Tłumaczenie, transkrypcja, anotacja i analiza tekstu',
    lessonRange: [6, 10],
    colorClass: 'from-indigo-500/20 to-cyan-400/10',
  },
  {
    id: 'm3',
    title: 'Moduł III: AI jako technologia i metodologia',
    subtitle: 'Jak działają systemy AI i jak projektować rzetelne porównania',
    lessonRange: [11, 15],
    colorClass: 'from-sky-500/20 to-blue-400/10',
  },
]

const moduleForLesson = (id: number): string => {
  if (id <= 5) return 'm1'
  if (id <= 10) return 'm2'
  return 'm3'
}

const emptyLesson = {
  title: '',
  theme: '',
  goals: [],
  tools: [],
  exercises: [],
  reflection: [],
}

const lessonBlueprints = [
  {
    title: 'Organizacja kursu i mapa semestru',
    theme: 'Wprowadzenie do kursu, zasad pracy i formy zaliczenia.',
    goals: ['Poznanie struktury 15 zajęć i 3 modułów', 'Ustalenie zasad pracy warsztatowej', 'Zrozumienie wymagań mini-projektu'],
    tools: ['Platforma kursowa', 'Notatnik zajęciowy', 'Wybrane narzędzia AI (przegląd)'],
    exercises: ['Analiza przykładowego problemu językowego', 'Wstępny szkic pomysłu na mini-projekt'],
    reflection: ['Jakie obszary języka chcesz badać?', 'Które narzędzia AI znasz i jak oceniasz ich wiarygodność?'],
  },
  {
    title: 'Podstawy AI i dobre prompty: od pojęć do praktyki',
    theme: 'W jednej lekcji łączymy fundamenty: czym są AI, ML, sieci neuronowe i AI generatywna, a potem przechodzimy do iteracyjnego poprawiania promptów.',
    goals: [
      'Rozróżnianie pojęć: AI, ML, sieci neuronowe, AI generatywna',
      'Rozróżnianie promptu ogólnego od precyzyjnego',
      'Nauka iteracyjnego ulepszania promptu krok po kroku',
      'Umiejętność opisu kryteriów jakości odpowiedzi',
      'Praca z ograniczeniami: kontekst, format, odbiorca i cel',
    ],
    tools: ['Model językowy (dowolny)', 'Krótka mapa pojęć AI/ML/NN/GenAI', 'Szablon oceny odpowiedzi', 'Tabela iteracji promptów'],
    exercises: [
      'Blok A (20 min): wyjaśnij własnymi słowami różnice między AI, ML, sieciami neuronowymi i AI generatywną + podaj po 1 przykładzie językowym.',
      'Iteracja 0 (zły prompt): "Napisz coś o AI." Problem: brak celu, brak odbiorcy, brak formatu i brak kryteriów jakości.',
      'Iteracja 1: "Wyjaśnij AI studentowi." Co nadal słabe: nadal nie wiemy, jaki poziom, jaka długość i jakie elementy obowiązkowe.',
      'Iteracja 2: "Wyjaśnij sztuczną inteligencję studentowi filologii w 5 punktach." Poprawa: pojawia się odbiorca i format, ale wciąż brakuje zakresu i przykładów.',
      'Iteracja 3: "Wyjaśnij: AI, uczenie maszynowe, sieci neuronowe i AI generatywną. Daj 1 przykład językowy do każdego pojęcia." Poprawa: zawężony zakres; nadal brak kryteriów stylu i jakości.',
      'Iteracja 4: "Napisz w prostym języku (B1), bez żargonu, max 220 słów, 5 punktów + mini-tabela różnic. Jeśli czegoś nie wiesz, zaznacz niepewność." To jest wersja dobra: cel, odbiorca, zakres, format i ograniczenia są jawne.',
      'Blok B (15 min): porównaj odpowiedzi z iteracji 0-4 i oceń, kiedy model naprawdę zaczął dawać użyteczny wynik.',
      'Porównanie wyników z 5 iteracji i ocena: trafność, kompletność, klarowność, ryzyko halucynacji.',
    ],
    reflection: [
      'Które pojęcie (AI/ML/NN/GenAI) było najtrudniejsze i dlaczego?',
      'Która zmiana promptu dała największy wzrost jakości i dlaczego?',
      'Jakie elementy promptu są dla Ciebie najtrudniejsze: cel, kontekst, format czy kryteria?',
      'W jakich zadaniach językoznawczych możesz użyć podejścia iteracyjnego od jutra?',
    ],
  },
  {
    title: 'Transkrypcja nagrania: darmowe pipeline i ewaluacja jakości',
    theme: 'Pracujemy na nagraniu z Zajęć 2 i porównujemy darmowe metody transkrypcji: lokalne, GUI i awaryjnie webowe.',
    goals: [
      'Wykonanie transkrypcji bez płatnych API',
      'Porównanie jakości narzędzi na tym samym materiale',
      'Ocena transkryptów wspólną rubryką 1-5',
      'Dokumentowanie ustawień i czasu pracy',
      'Przygotowanie materiału do mini-projektu',
    ],
    tools: [
      'Whisper lokalnie (Python)',
      'whisper.cpp',
      'Subtitle Edit (GUI)',
      'ffmpeg do przygotowania audio',
      'Arkusz rubryki jakości transkryptu',
    ],
    exercises: [
      'Przygotuj wspólny fragment testowy nagrania z Zajęć 2 (6-8 min).',
      'Wykonaj transkrypcję tym samym fragmentem trzema podejściami (min. 2 na grupę).',
      'Zachowaj wersję surową i po korekcie, a różnice opisz w logu.',
      'Oceń wyniki rubryką: kompletność, poprawność, czytelność, zgodność z nagraniem, koszt czasu.',
      'Przedstaw rekomendację narzędzia dla mini-projektu wraz z uzasadnieniem.',
    ],
    reflection: [
      'Które darmowe narzędzie dało najlepszy kompromis jakość/czas?',
      'Jakie błędy transkrypcji powtarzały się najczęściej i dlaczego?',
      'Kiedy warto iść w pełny offline, a kiedy w rozwiązanie GUI/web?',
      'Jak opiszesz metodologię transkrypcji w swoim mini-projekcie?',
    ],
  },
  {
    title: 'Python: transkrypcja PL z Hugging Face (Google Colab lub PyCharm)',
    theme: 'Skupiamy się na prostym kodzie Python do transkrypcji po polsku, z użyciem modelu Hugging Face i dwóch środowisk pracy.',
    goals: [
      'Uruchomienie polskiej transkrypcji mowy na modelu HF',
      'Przejście workflow krok po kroku w Colab i PyCharm',
      'Zbudowanie prostego skryptu: input audio -> output txt',
      'Świadome użycie Codex i chatu do debugowania oraz prostego refaktoru',
      'Dokumentacja procesu i ograniczeń modelu',
    ],
    tools: [
      'Python 3.10+ i venv',
      'Hugging Face transformers + model openai/whisper-small',
      'Google Colab lub PyCharm',
      'Codex + chat (pomoc kodowa)',
      'Google AI Studio (opcjonalnie do prostych stron z wynikami)',
    ],
    exercises: [
      'Uruchom transkrypcję po polsku na krótkim pliku audio w Google Colab.',
      'Uruchom ten sam kod lokalnie w PyCharm jako skrypt `transcribe.py`.',
      'Zapisz dwie wersje pliku: surową i poprawioną ręcznie.',
      'Porównaj wynik i czas działania między Colab i PyCharm.',
      'Przygotuj krótką notatkę o ograniczeniach modelu na Twoim nagraniu.',
    ],
    reflection: [
      'Które środowisko było wygodniejsze: Colab czy PyCharm i dlaczego?',
      'Jakie błędy model popełniał najczęściej na języku polskim?',
      'W którym kroku najbardziej pomógł Codex, a w którym chat?',
      'Jak poprawisz jakość transkrypcji w kolejnej iteracji?',
    ],
  },
  ...Array.from({ length: 10 }, () => ({ ...emptyLesson })),
  {
    title: 'Prezentacje i omówienie mini-projektów',
    theme: 'Prezentacja wyników, porównanie metod i ograniczeń.',
    goals: ['Jasna prezentacja procesu', 'Krytyczne omówienie rezultatów', 'Wnioski dla dalszej pracy'],
    tools: ['Prezentacje studentów', 'Rubryka oceny', 'Panel dyskusji'],
    exercises: ['Prezentacja projektu i pytania recenzenckie'],
    reflection: ['Co zrobił(a)byś inaczej w kolejnej iteracji projektu?'],
  },
]

export const lessons: Lesson[] = lessonBlueprints.map((item, index) => {
  const id = index + 1
  return {
    // Wszystkie zajęcia mają ten sam format danych, dzięki czemu widok 5-15 jest łatwy do dalszej rozbudowy.
    id,
    title: item.title,
    moduleId: moduleForLesson(id),
    theme: item.theme,
    goals: item.goals,
    tools: item.tools,
    exercises: item.exercises,
    reflection: item.reflection,
  }
})
