export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-unicive-700 text-white shadow-sm"
          >
            <span className="text-lg font-bold leading-none">
              <span className="text-accent-300">U</span>
            </span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">Unicive</p>
            <p className="text-xs text-slate-500">Polo Caruaru · PE</p>
          </div>
        </div>
        <span className="hidden rounded-full bg-unicive-50 px-3 py-1 text-xs font-medium text-unicive-700 ring-1 ring-unicive-100 sm:inline-block">
          Jornada do Aluno
        </span>
      </div>
    </header>
  );
}
