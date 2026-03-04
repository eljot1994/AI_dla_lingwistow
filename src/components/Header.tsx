export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">AI dla lingwistów</p>
          <h1 className="text-lg font-semibold">Kurs akademicki</h1>
        </div>
      </div>
    </header>
  )
}
