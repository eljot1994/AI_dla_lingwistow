export function LessonFourPage() {
  const learningOutcomes = [
    'Rozumiesz, jak uruchomić polską transkrypcję mowy na modelu z Hugging Face.',
    'Potrafisz przejść ten sam workflow w Google Colab i w PyCharm.',
    'Umiesz napisać prosty skrypt Python: wejście audio -> transkrypcja -> plik TXT.',
    'Wiesz, jak używać Codex i chatu do poprawiania kodu bez komplikowania projektu.',
    'Masz gotowe scenariusze użycia transkrypcji do projektów językoznawczych.',
  ]

  const timeline = [
    { time: '0-10 min', title: 'Start', details: 'Cel: prosty, działający skrypt transkrypcji PL.' },
    { time: '10-20 min', title: 'Narzędzia', details: 'Ustalamy minimalny stack: Codex, chat, Google AI Studio, Colab, PyCharm.' },
    { time: '20-35 min', title: 'Model HF', details: 'Jak działa model Whisper i jak wymusić język polski.' },
    { time: '35-60 min', title: 'Warsztat Colab', details: 'Instalacja, kod, uruchomienie, zapis transkrypcji do pliku.' },
    { time: '60-80 min', title: 'Warsztat PyCharm', details: 'To samo lokalnie: venv, pip, prosty skrypt i uruchomienie.' },
    { time: '80-90 min', title: 'Zastosowania i domknięcie', details: 'Scenariusze użycia, ograniczenia, zadanie po zajęciach.' },
  ]

  const toolStack = [
    {
      name: 'Codex',
      role: 'Pomoc w kodowaniu i refaktorze',
      use: [
        'Poproś o poprawę kodu bez zmiany logiki działania.',
        'Poproś o wersję prostszą dla początkujących.',
        'Poproś o dopisanie krótkiego README z komendami.',
      ],
      caution: 'Każdą zmianę uruchamiasz lokalnie i testujesz na pliku audio.',
      tone: 'border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20',
    },
    {
      name: 'Chat (np. ChatGPT / Gemini)',
      role: 'Wyjaśnianie błędów i plan kolejnych kroków',
      use: [
        'Wklej traceback i poproś o diagnozę krok po kroku.',
        'Poproś o listę najczęstszych błędów instalacji i jak je naprawić.',
        'Poproś o prosty plan testów dla skryptu.',
      ],
      caution: 'Nie kopiujesz kodu w ciemno; zawsze uruchamiasz i sprawdzasz wynik.',
      tone: 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20',
    },
    {
      name: 'Google AI Studio',
      role: 'Dodatkowo: szybkie prototypy stron i UI',
      use: [
        'Tworzenie prostych podglądów strony z wynikami transkrypcji.',
        'Generowanie szkicu landing page projektu.',
        'Szybkie warianty treści i układu sekcji.',
      ],
      caution: 'Na tych zajęciach rdzeń pracy to Python; AI Studio traktujemy pomocniczo do stron.',
      tone: 'border-cyan-200 bg-cyan-50/60 dark:border-cyan-900 dark:bg-cyan-950/20',
    },
  ]

  const modelCard = {
    model: 'openai/whisper-small',
    task: 'automatic-speech-recognition',
    language: 'polish',
    why: 'Model jest prosty do uruchomienia przez transformers i dobrze nadaje się na pierwszy warsztat transkrypcji PL.',
    limits: [
      'Jakość spada na słabym audio i przy wielu nakładających się głosach.',
      'Dłuższe nagrania wymagają chunkowania i więcej czasu obliczeń.',
      'Wynik wymaga korekty interpunkcji i terminów specjalistycznych.',
    ],
  }

  const colabSteps = [
    {
      step: '1. Otwórz Google Colab i ustaw GPU',
      command: 'Runtime -> Change runtime type -> Hardware accelerator: T4 GPU',
      note: 'GPU nie jest obowiązkowe, ale przyspiesza transkrypcję.',
    },
    {
      step: '2. Zainstaluj biblioteki',
      command: '!pip install -q transformers accelerate datasets soundfile librosa',
      note: 'Uruchom w pierwszej komórce notebooka.',
    },
    {
      step: '3. Wgraj plik audio',
      command: 'from google.colab import files\nfiles.upload()',
      note: 'Wgraj np. `nagranie.mp3` lub `nagranie.wav`.',
    },
    {
      step: '4. Wklej i uruchom kod transkrypcji',
      command:
        'import torch\nfrom transformers import pipeline\n\ndevice = 0 if torch.cuda.is_available() else -1\nasr = pipeline(\n    "automatic-speech-recognition",\n    model="openai/whisper-small",\n    chunk_length_s=30,\n    generate_kwargs={"language": "polish", "task": "transcribe"},\n    device=device,\n)\nresult = asr("nagranie.mp3")\nprint(result["text"])',
      note: 'To minimalna wersja, która ma po prostu zadziałać.',
    },
    {
      step: '5. Zapisz wynik do pliku',
      command: 'with open("transkrypcja.txt", "w", encoding="utf-8") as f:\n    f.write(result["text"].strip() + "\\n")',
      note: 'Plik txt oddajesz jako wynik surowy.',
    },
    {
      step: '6. Pobierz transkrypcję',
      command: 'from google.colab import files\nfiles.download("transkrypcja.txt")',
      note: 'Gotowe do dalszej korekty i porównania jakości.',
    },
  ]

  const pycharmSteps = [
    {
      step: '1. Utwórz nowy projekt Python w PyCharm',
      command: 'Nowy projekt + nowe venv',
      note: 'Polecany Python 3.10 lub nowszy.',
    },
    {
      step: '2. Zainstaluj zależności w terminalu PyCharm',
      command: 'pip install --upgrade pip && pip install transformers torch accelerate soundfile librosa',
      note: 'Jeśli są problemy z `torch`, zainstaluj zgodnie z instrukcją dla systemu.',
    },
    {
      step: '3. Dodaj plik `transcribe.py`',
      command: 'Wklej kod z sekcji poniżej (starter).',
      note: 'To wersja najprostsza: ustawiasz ścieżkę pliku w kodzie i uruchamiasz przez Run.',
    },
    {
      step: '4. Uruchom skrypt',
      command: 'Run `transcribe.py` w PyCharm (zielona strzałka) lub `python transcribe.py`',
      note: 'Wynik pojawi się w konsoli i zapisze do pliku.',
    },
    {
      step: '5. Sprawdź wynik i popraw najgorsze błędy',
      command: 'Otwórz `transkrypcja.txt` i nanieś korektę ręczną.',
      note: 'Zachowaj dwie wersje: surową i poprawioną.',
    },
  ]

  const starterCode = `import torch
from transformers import pipeline

# Ustaw ścieżkę do pliku audio (mp3/wav/m4a)
INPUT_AUDIO = "nagranie.mp3"
OUTPUT_FILE = "transkrypcja.txt"


def build_asr():
    device = 0 if torch.cuda.is_available() else -1
    return pipeline(
        "automatic-speech-recognition",
        model="openai/whisper-small",
        chunk_length_s=30,
        generate_kwargs={"language": "polish", "task": "transcribe"},
        device=device,
    )


def main():
    asr = build_asr()
    result = asr(INPUT_AUDIO)
    text = result["text"].strip()

    print("\n--- TRANSKRYPCJA ---")
    print(text)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(text + "\n")

    print("\nZapisano do:", OUTPUT_FILE)


if __name__ == "__main__":
    main()
`

  const simplePrompts = [
    {
      name: 'Prompt do Codex (refaktor bez komplikacji)',
      text: 'Uprość ten skrypt Python do maks. 35 linii i zostaw tylko: INPUT_AUDIO, transkrypcję i zapis do pliku.',
    },
    {
      name: 'Prompt do chatu (diagnoza błędu)',
      text: 'Mam błąd przy uruchomieniu transformers w PyCharm. Oto traceback. Podaj 3 możliwe przyczyny i plan naprawy krok po kroku.',
    },
    {
      name: 'Prompt do Google AI Studio (stronka projektu)',
      text: 'Zbuduj prostą stronę HTML z sekcjami: opis nagrania, transkrypcja surowa, transkrypcja poprawiona, wnioski.',
    },
  ]

  const scenarios = [
    {
      title: 'Scenariusz 1: Transkrypcja nagrania z zajęć',
      context: 'Masz 15-20 minut nagrania i chcesz szybko uzyskać bazowy tekst.',
      steps: [
        'Uruchom wersję Colab, żeby szybko wygenerować transkrypt.',
        'Zapisz plik surowy `transkrypcja.txt`.',
        'Ręcznie popraw błędy interpunkcji i nazwy własne.',
      ],
    },
    {
      title: 'Scenariusz 2: Porównanie jakości Colab vs PyCharm',
      context: 'Ta sama próbka audio, dwa środowiska pracy.',
      steps: [
        'Uruchom ten sam model i te same ustawienia w obu środowiskach.',
        'Porównaj czas wykonania i 10 trudnych fragmentów.',
        'Wybierz środowisko, które będzie używane dalej w projekcie.',
      ],
    },
    {
      title: 'Scenariusz 3: Mini-projekt językoznawczy',
      context: 'Transkrypcja jako etap wstępny do dalszej analizy języka.',
      steps: [
        'Wygeneruj transkrypt surowy.',
        'Zrób korektę i oznacz fragmenty [NIEPEWNE].',
        'Użyj poprawionego pliku jako danych wejściowych do kolejnej analizy.',
      ],
    },
  ]

  const antiPatterns = [
    'Za dużo narzędzi naraz zamiast jednego prostego workflow.',
    'Brak wymuszenia języka polskiego przy transkrypcji.',
    'Brak wersji surowej i poprawionej pliku transkrypcji.',
    'Kopiowanie kodu AI bez uruchomienia i testu na własnym nagraniu.',
    'Brak zapisu komend i wersji bibliotek do dokumentacji projektu.',
  ]

  const deliverables = [
    'Działający skrypt `transcribe.py` (PyCharm) lub notebook Colab.',
    'Plik `transkrypcja_surowa.txt`.',
    'Plik `transkrypcja_poprawiona.txt`.',
    'Krótka notatka: co pomogło bardziej (Codex czy chat) i dlaczego.',
    'Lista 5 najczęstszych błędów modelu na Twoim nagraniu.',
  ]

  const homework = [
    'Przepisz i uruchom skrypt na pełnym nagraniu po zajęciach.',
    'Przygotuj wersję surową i poprawioną transkrypcji.',
    'Wypisz 10 fragmentów trudnych i zaproponuj sposób poprawy.',
    'Dopisz krótki README: instalacja, uruchomienie, ograniczenia modelu.',
    'Opcjonalnie: przygotuj prostą stronę z wynikami w Google AI Studio.',
  ]

  return (
    <article className="animate-fadeSlideIn space-y-8">
      <section className="card relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(59,130,246,0.2),transparent_38%),radial-gradient(circle_at_100%_10%,rgba(14,165,233,0.17),transparent_34%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">Zajęcia 4 | Python + Hugging Face</p>
          <h2 className="mt-3 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Polska transkrypcja mowy: prosty workflow w Google Colab lub PyCharm
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Na tych zajęciach skupiamy się na jednym celu: działający, prosty kod w Pythonie do transkrypcji po polsku.
            Używamy modelu Hugging Face i przechodzimy cały proces krok po kroku.
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
          {timeline.map((item, index) => (
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
        <h3 className="text-lg font-semibold">Minimalny zestaw narzędzi (zgodnie z założeniem zajęć)</h3>
        <div className="grid gap-4 lg:grid-cols-3">
          {toolStack.map((tool) => (
            <article key={tool.name} className={`card rounded-2xl p-6 sm:p-7 ${tool.tone}`}>
              <h4 className="text-base font-semibold">{tool.name}</h4>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                <span className="font-semibold">Rola:</span> {tool.role}
              </p>
              <div className="mt-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900/60">
                <p className="font-semibold">Jak używać na zajęciach</p>
                <ul className="mt-1 space-y-1 text-slate-600 dark:text-slate-300">
                  {tool.use.map((line) => (
                    <li key={line}>- {line}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-800 dark:text-slate-100">Uwaga:</span> {tool.caution}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Model Hugging Face do transkrypcji PL</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-100">Model:</span> {modelCard.model}
            </p>
            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-100">Task:</span> {modelCard.task}
            </p>
            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-100">Język:</span> {modelCard.language}
            </p>
            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-100">Dlaczego ten model:</span> {modelCard.why}
            </p>
          </div>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Ograniczenia (musimy je znać)</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {modelCard.limits.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Google Colab: instrukcja krok po kroku</h3>
        <div className="mt-4 space-y-3">
          {colabSteps.map((item) => (
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

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">PyCharm: instrukcja krok po kroku</h3>
        <div className="mt-4 space-y-3">
          {pycharmSteps.map((item) => (
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

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Prosty kod Python (`transcribe.py`)</h3>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 px-4 py-4 text-xs text-slate-100">
          <code>{starterCode}</code>
        </pre>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Gotowe prompty pomocnicze</h3>
        <div className="mt-4 space-y-2">
          {simplePrompts.map((prompt) => (
            <article key={prompt.name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
              <p className="font-semibold">{prompt.name}</p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{prompt.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">Scenariusze użycia (po kilka)</h3>
        <div className="mt-4 space-y-3">
          {scenarios.map((scenario) => (
            <article key={scenario.title} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <p className="text-sm font-semibold">{scenario.title}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{scenario.context}</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                {scenario.steps.map((line) => (
                  <li key={line}>- {line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Antywzorce</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {antiPatterns.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>

        <article className="card rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Co oddajecie po zajęciach</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {deliverables.map((line) => (
              <li key={line}>- {line}</li>
            ))}
          </ul>
        </article>
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
