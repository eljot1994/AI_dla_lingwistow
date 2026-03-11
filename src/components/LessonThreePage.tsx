export function LessonThreePage() {
  const learningOutcomes = [
    'Potrafisz wykonać transkrypcję nagrania z Zajęć 2 bez kosztów API.',
    'Rozumiesz różnice między transkrypcją lokalną, półautomatyczną i webową.',
    'Umiesz porównać jakość transkryptu według wspólnej rubryki.',
    'Potrafisz oczyścić transkrypt bez utraty sensu wypowiedzi.',
    'Masz gotowy workflow do użycia w mini-projekcie językoznawczym.',
  ]

  const plan = [
    { time: '0-10 min', title: 'Start i cele', details: 'Ustalenie kryteriów: ma być darmowo, powtarzalnie i etycznie.' },
    { time: '10-25 min', title: 'Przegląd narzędzi free', details: 'Whisper lokalnie, whisper.cpp, Subtitle Edit, opcja awaryjna web.' },
    { time: '25-35 min', title: 'Przygotowanie audio', details: 'Format pliku, czyszczenie ciszy, jakość nagrania i nazewnictwo wersji.' },
    { time: '35-65 min', title: 'Laboratorium transkrypcji', details: 'Grupy pracują na tym samym nagraniu z Zajęć 2, ale różnymi metodami.' },
    { time: '65-80 min', title: 'Porównanie wyników', details: 'Skoring jakości, różnice błędów i koszt czasu.' },
    { time: '80-90 min', title: 'Domknięcie', details: 'Checklist, pakiet oddawany po zajęciach i zadanie domowe.' },
  ]

  const zeroCostRules = [
    'Nie używamy płatnych API ani rozwiązań z token billing.',
    'Wybieramy narzędzia open-source lub darmowe aplikacje desktopowe.',
    'Każda grupa zapisuje czas wykonania i zużyte zasoby sprzętowe.',
    'Wyniki porównujemy na tym samym fragmencie nagrania i tej samej rubryce.',
    'Dane zostają lokalnie, jeśli materiał zawiera wrażliwe informacje.',
  ]

  const toolkits = [
    {
      name: 'Whisper lokalnie (Python)',
      setup: 'Instalacja przez pip; model tiny/base/small uruchamiany na własnym komputerze.',
      strengths: ['0 zł za użycie', 'dobra jakość PL', 'powtarzalny workflow skryptowy'],
      limits: ['wolniej na słabszym CPU', 'wymaga terminala', 'trzeba pilnować wersji modeli'],
      bestFit: 'Dla grup, które chcą automatyzować i powtórzyć pipeline w mini-projekcie.',
      tone: 'border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20',
    },
    {
      name: 'whisper.cpp (lokalnie, lekki runtime)',
      setup: 'CLI + skompilowany model GGML/GGUF; dobre na starszych laptopach.',
      strengths: ['bardzo lekki', 'działa offline', 'łatwy eksport do .txt/.srt'],
      limits: ['wymaga konfiguracji', 'jakość zależy od modelu i VAD', 'mniej wygodne GUI'],
      bestFit: 'Dla grup z ograniczonym sprzętem lub gdy trzeba działać całkowicie offline.',
      tone: 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20',
    },
    {
      name: 'Subtitle Edit + Whisper',
      setup: 'Darmowa aplikacja desktopowa do napisów z integracją modeli ASR.',
      strengths: ['GUI bez kodu', 'łatwa ręczna korekta', 'naturalny eksport napisów i tekstu'],
      limits: ['więcej klikania', 'mniej automatyzacji', 'ryzyko niespójnych ustawień między grupami'],
      bestFit: 'Dla osób, które wolą interfejs wizualny i szybkie ręczne poprawki.',
      tone: 'border-cyan-200 bg-cyan-50/60 dark:border-cyan-900 dark:bg-cyan-950/20',
    },
    {
      name: 'Opcja awaryjna: YouTube (unlisted) + auto-napisy',
      setup: 'Wrzucenie filmu jako niepubliczny i pobranie automatycznych napisów.',
      strengths: ['0 zł', 'bardzo szybki start', 'brak instalacji'],
      limits: ['kwestie prywatności', 'zależność od sieci', 'mniejsza kontrola nad pipeline'],
      bestFit: 'Tylko gdy lokalne narzędzia nie zadziałają i materiał nie jest wrażliwy.',
      tone: 'border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20',
    },
  ]

  const prepChecklist = [
    'Ustal wspólny fragment testowy: np. pierwsze 6-8 minut nagrania z Zajęć 2.',
    'Sprawdź format wejściowy (preferowane .wav lub .mp3) i poziom głośności.',
    'Znormalizuj nazwy plików: grupa_narzędzie_wersja.',
    'Jeśli możliwe, przygotuj audio mono 16 kHz dla większej stabilności ASR.',
    'Ustal, czy wymagamy znaczników czasu i podziału na mówców.',
  ]

  const workflow = [
    ['1. Wczytanie audio', 'Każda grupa bierze to samo nagranie i tę samą długość próbki.'],
    ['2. Transkrypcja bazowa', 'Generujemy surowy transkrypt bez ręcznych poprawek.'],
    ['3. Korekta językowa', 'Usuwamy oczywiste błędy, ale nie zmieniamy sensu wypowiedzi.'],
    ['4. Oznaczenie niepewności', 'Miejsca niejednoznaczne znakujemy etykietą [NIEPEWNE].'],
    ['5. Ewaluacja rubryką', 'Ocena 1-5 w stałych kryteriach jakości.'],
    ['6. Raport porównawczy', 'Spisujemy: jakość, czas, trudność i rekomendację narzędzia.'],
  ]

  const commandExamples = [
    {
      name: 'Przygotowanie audio (ffmpeg)',
      command: 'ffmpeg -i zajecia2.mp4 -ar 16000 -ac 1 -vn zajecia2_mono16k.wav',
      note: 'Konwersja do pliku audio mono 16 kHz, który zwykle poprawia stabilność rozpoznawania.',
    },
    {
      name: 'Whisper lokalnie (CLI)',
      command: 'whisper zajecia2_mono16k.wav --model small --language pl --task transcribe --output_format txt,srt',
      note: 'Darmowa transkrypcja lokalna bez wysyłania pliku do płatnego API.',
    },
    {
      name: 'whisper.cpp (przykład)',
      command: './main -m models/ggml-small.bin -f zajecia2_mono16k.wav -l pl -otxt -osrt',
      note: 'Lekka ścieżka offline; dobra przy słabszym sprzęcie i ograniczonym internecie.',
    },
  ]


  const stepByStepWhisper = [
    {
      step: '1. Załóż folder roboczy',
      command: 'mkdir -p ~/zajecia3-transkrypcja && cd ~/zajecia3-transkrypcja',
      note: 'Pracujemy w jednym katalogu, żeby łatwo oddać komplet plików.',
    },
    {
      step: '2. Sprawdź Python i pip',
      command: 'python3 --version && pip3 --version',
      note: 'Jeśli czegoś brakuje, doinstaluj Python 3.10+.',
    },
    {
      step: '3. Zainstaluj ffmpeg',
      command: 'brew install ffmpeg',
      note: 'Windows: winget install Gyan.FFmpeg',
    },
    {
      step: '4. Utwórz środowisko wirtualne',
      command: 'python3 -m venv .venv',
      note: 'Jedno środowisko na grupę projektową.',
    },
    {
      step: '5. Aktywuj środowisko',
      command: 'source .venv/bin/activate',
      note: 'Windows PowerShell: .\\.venv\\Scripts\\Activate.ps1',
    },
    {
      step: '6. Zainstaluj Whisper',
      command: 'pip install --upgrade pip && pip install openai-whisper',
      note: 'To lokalna, darmowa transkrypcja bez płatnego API.',
    },
    {
      step: '7. Przygotuj audio z nagrania',
      command: 'ffmpeg -i /sciezka/do/zajecia2.mp4 -ar 16000 -ac 1 -vn zajecia2_mono16k.wav',
      note: 'Konwersja do mono 16 kHz poprawia stabilność rozpoznawania.',
    },
    {
      step: '8. Uruchom transkrypcję',
      command: 'whisper zajecia2_mono16k.wav --model small --language pl --task transcribe --output_format txt,srt',
      note: 'Wyniki TXT i SRT zapiszą się obok pliku audio.',
    },
    {
      step: '9. Spakuj artefakty do oddania',
      command: 'mkdir -p oddanie && cp zajecia2_mono16k.txt zajecia2_mono16k.srt oddanie/',
      note: 'To wersja surowa do późniejszej korekty i porównań.',
    },
    {
      step: '10. Dodaj szybki raport',
      command: 'echo "Narzędzie: whisper | Model: small | Czas pracy: ____ min" > oddanie/raport.txt',
      note: 'Dopisujecie rubrykę jakości i listę błędów.',
    },
  ]

  const stepByStepWhisperCpp = [
    {
      step: '1. Pobierz whisper.cpp',
      command: 'cd ~/zajecia3-transkrypcja && git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp',
      note: 'Jednorazowa instalacja na komputer.',
    },
    {
      step: '2. Zbuduj narzędzie',
      command: 'cmake -B build && cmake --build build -j',
      note: 'Wymagane CMake; build może potrwać kilka minut.',
    },
    {
      step: '3. Pobierz model small',
      command: 'bash ./models/download-ggml-model.sh small',
      note: 'Model small to dobry kompromis jakości i czasu.',
    },
    {
      step: '4. Uruchom transkrypcję offline',
      command: './build/bin/whisper-cli -m models/ggml-small.bin -f ../zajecia2_mono16k.wav -l pl -otxt -osrt',
      note: 'Potem porównaj wynik i czas z torem Whisper (Python).',
    },
  ]

  const stepByStepSubtitleEdit = [
    'Pobierz i uruchom Subtitle Edit (wersja darmowa).',
    'Open video/audio: wskaż plik z nagraniem Zajęć 2.',
    'Auto transcribe / Whisper: wybierz język polski i model small.',
    'Uruchom transkrypcję i zrób ręczną korektę interpunkcji.',
    'Zapisz dwa pliki: .srt i .txt, a następnie oceń je rubryką 1-5.',
  ]


  const decisionMatrix = [
    {
      criterion: 'Najniższy próg wejścia',
      recommendation: 'Subtitle Edit',
      why: 'GUI ułatwia start i szybką korektę bez pracy w terminalu.',
    },
    {
      criterion: 'Największa kontrola metodologiczna',
      recommendation: 'Whisper lokalnie (Python)',
      why: 'Powtarzalne komendy, łatwe logowanie parametrów i wersji.',
    },
    {
      criterion: 'Słaby komputer / pełny offline',
      recommendation: 'whisper.cpp',
      why: 'Niski narzut, brak zależności od usług webowych.',
    },
    {
      criterion: 'Brak czasu na konfigurację',
      recommendation: 'YouTube auto-caption (awaryjnie)',
      why: 'Szybko działa, ale ma większe ryzyko dla prywatności i jakości.',
    },
  ]

  const labTracks = [
    {
      name: 'Tor A: Whisper lokalnie',
      tasks: [
        'Uruchom transkrypcję dla fragmentu 6-8 min.',
        'Zapisz ustawienia (model, język, format wyjścia).',
        'Oceń transkrypt rubryką i zanotuj 5 najczęstszych błędów.',
      ],
    },
    {
      name: 'Tor B: whisper.cpp',
      tasks: [
        'Wykonaj transkrypcję tego samego fragmentu.',
        'Sprawdź różnicę jakości między krótkimi i dłuższymi segmentami.',
        'Porównaj tempo działania z torem A.',
      ],
    },
    {
      name: 'Tor C: Subtitle Edit',
      tasks: [
        'Wygeneruj transkrypt i zrób ręczną korektę interpunkcji.',
        'Wyeksportuj plik .srt i .txt.',
        'Opisz, które poprawki były automatyczne, a które ręczne.',
      ],
    },
  ]

  const rubric = [
    ['Kompletność', 'Czy transkrypt obejmuje całą wypowiedź bez pominięć?'],
    ['Poprawność leksykalna', 'Czy słowa specjalistyczne i nazwy własne są poprawne?'],
    ['Czytelność', 'Czy podział na segmenty i interpunkcja ułatwiają odbiór?'],
    ['Zgodność z nagraniem', 'Czy sens wypowiedzi nie został zmieniony podczas korekty?'],
    ['Przejrzystość niepewności', 'Czy trudne miejsca są oznaczone i opisane?'],
    ['Koszt czasu', 'Ile minut pracy kosztowało uzyskanie wersji używalnej?'],
  ]

  const correctionPrompts = [
    {
      name: 'Prompt 1: czyszczenie techniczne',
      text: 'Popraw interpunkcję i podział zdań w transkrypcji, ale nie zmieniaj słownictwa merytorycznego. Oznacz miejsca niepewne tagiem [NIEPEWNE].',
    },
    {
      name: 'Prompt 2: terminologia',
      text: 'Sprawdź transkrypt pod kątem terminów AI/lingwistyki. Zwróć listę potencjalnie błędnych terminów i zaproponuj korekty z krótkim uzasadnieniem.',
    },
    {
      name: 'Prompt 3: raport jakości',
      text: 'Oceń transkrypt w skali 1-5: kompletność, poprawność, czytelność, zgodność z nagraniem. Na końcu podaj 3 konkretne rekomendacje poprawy.',
    },
  ]

  const antiPatterns = [
    'Transkrypcja „na żywo” przez mikrofon laptopa zamiast z pliku źródłowego.',
    'Porównywanie narzędzi na różnych fragmentach nagrania.',
    'Ręczne przepisywanie bez zachowania wersji surowej.',
    'Brak oznaczenia miejsc niepewnych, mimo niskiej jakości audio.',
    'Ignorowanie kwestii prywatności przy wrzucaniu nagrań do usług webowych.',
  ]

  const deliverables = [
    'Plik transkryptu surowego i plik po korekcie (np. TXT/SRT).',
    'Krótki log techniczny: narzędzie, model, ustawienia, czas wykonania.',
    'Rubryka jakości z oceną 1-5 i uzasadnieniem.',
    'Lista najczęstszych błędów z przykładowymi poprawkami.',
    'Rekomendacja: które darmowe rozwiązanie jest najlepsze i dlaczego.',
  ]

  const homework = [
    'Wykonaj pełną transkrypcję całego nagrania z Zajęć 2 wybranym darmowym narzędziem.',
    'Przygotuj dwie wersje: surową i po korekcie.',
    'Oceń obie wersje rubryką z zajęć i opisz różnicę jakości.',
    'Wskaż 10 najtrudniejszych fragmentów i zaproponuj strategię ich poprawy.',
    'Dodaj krótki akapit metodologiczny do mini-projektu: dlaczego wybrałeś/-aś to narzędzie.',
  ]

  return (
    <article className="animate-fadeSlideIn space-y-8">
      <section className="card relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(2,132,199,0.2),transparent_38%),radial-gradient(circle_at_100%_10%,rgba(20,184,166,0.15),transparent_32%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">Zajęcia 3 | Darmowa transkrypcja nagrania</p>
          <h2 className="mt-3 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Warsztat: transkrypcja nagrania z Zajęć 2 bez kosztów API
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Pracujemy na realnym materiale z poprzedniego spotkania i porównujemy darmowe metody transkrypcji. Celem jest
            uzyskanie używalnego transkryptu, który można włączyć do mini-projektu razem z rzetelną dokumentacją procesu.
          </p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {learningOutcomes.map((item) => (
              <p key={item} className="rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Plan spotkania (90 min)</h3>
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

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Zasady kosztowe i organizacyjne</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {zeroCostRules.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Checklist przed startem</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {prepChecklist.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Darmowe rozwiązania do transkrypcji</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {toolkits.map((tool) => (
            <article key={tool.name} className={`card rounded-2xl p-6 sm:p-7 ${tool.tone}`}>
              <h4 className="text-base font-semibold">{tool.name}</h4>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="font-semibold">Setup:</span> {tool.setup}
              </p>
              <div className="mt-3 grid gap-2">
                <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 px-3 py-2 text-sm dark:border-emerald-900 dark:bg-emerald-950/25">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-300">Mocne strony</p>
                  <ul className="mt-1 space-y-1 text-slate-700 dark:text-slate-200">
                    {tool.strengths.map((line) => (
                      <li key={line}>+ {line}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-rose-200 bg-rose-50/70 px-3 py-2 text-sm dark:border-rose-900 dark:bg-rose-950/25">
                  <p className="font-semibold text-rose-700 dark:text-rose-300">Ograniczenia</p>
                  <ul className="mt-1 space-y-1 text-slate-700 dark:text-slate-200">
                    {tool.limits.map((line) => (
                      <li key={line}>- {line}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                <span className="font-semibold">Najlepsze użycie:</span> {tool.bestFit}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Pipeline transkrypcji (wersja wspólna dla grup)</h3>
          <div className="mt-4 space-y-2">
            {workflow.map(([name, desc]) => (
              <div key={name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <span className="font-semibold">{name}:</span> {desc}
              </div>
            ))}
          </div>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Macierz szybkiej decyzji</h3>
          <div className="mt-4 space-y-2">
            {decisionMatrix.map((item) => (
              <article key={item.criterion} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <p>
                  <span className="font-semibold">Kryterium:</span> {item.criterion}
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Rekomendacja:</span> {item.recommendation}
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Dlaczego:</span> {item.why}
                </p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Instrukcja krok po kroku: co zainstalować i co wpisać</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Wariant rekomendowany na zajęcia: Whisper lokalnie (Python). Poniżej pełna sekwencja od instalacji do plików oddawanych.
        </p>
        <div className="mt-4 space-y-3">
          {stepByStepWhisper.map((item) => (
            <article key={item.step} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <p className="text-sm font-semibold">{item.step}</p>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 px-3 py-2 text-xs text-slate-100">
                <code>{item.command}</code>
              </pre>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Alternatywa: whisper.cpp (offline)</h3>
          <div className="mt-4 space-y-2">
            {stepByStepWhisperCpp.map((item) => (
              <article key={item.step} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <p className="font-semibold">{item.step}</p>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 px-3 py-2 text-xs text-slate-100">
                  <code>{item.command}</code>
                </pre>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{item.note}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Alternatywa GUI: Subtitle Edit</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {stepByStepSubtitleEdit.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Przykładowe komendy (darmowy pipeline)</h3>
        <div className="mt-4 space-y-3">
          {commandExamples.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <p className="text-sm font-semibold">{item.name}</p>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 px-3 py-2 text-xs text-slate-100">
                <code>{item.command}</code>
              </pre>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Laboratorium: podział na tory</h3>
          <div className="mt-4 space-y-3">
            {labTracks.map((track) => (
              <article key={track.name} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <p className="text-sm font-semibold">{track.name}</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  {track.tasks.map((task) => (
                    <li key={task}>- {task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Rubryka oceny transkryptu (1-5)</h3>
          <div className="mt-4 space-y-2">
            {rubric.map(([name, desc]) => (
              <div key={name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <span className="font-semibold">{name}:</span> {desc}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Szablony promptów do korekty transkryptu</h3>
          <div className="mt-4 space-y-2">
            {correctionPrompts.map((prompt) => (
              <article key={prompt.name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
                <p className="font-semibold">{prompt.name}</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{prompt.text}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Antywzorce i pułapki</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {antiPatterns.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Co oddają studenci po zajęciach</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {deliverables.map((line) => (
            <li key={line}>- {line}</li>
          ))}
        </ul>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Zadanie domowe</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {homework.map((line) => (
            <li key={line}>- {line}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
