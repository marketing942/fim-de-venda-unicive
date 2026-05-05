import { GraduationCap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-unicive-700 text-white shadow-sm">
            <GraduationCap className="h-5 w-5" aria-hidden />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">Unicive</p>
            <p className="text-xs text-slate-500">Polo Caruaru</p>
          </div>
        </div>
        <span className="hidden rounded-full bg-unicive-50 px-3 py-1 text-xs font-medium text-unicive-700 sm:inline-block">
          Jornada do Aluno
        </span>
      </div>
    </header>
  );
}
