import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="/"
          aria-label="Unicive Polo Caruaru — início"
          className="flex items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-unicive-500/50"
        >
          <Image
            src="/logo-polo-caruaru.png"
            alt="Unicive — Polo Caruaru PE"
            width={1080}
            height={1350}
            priority
            className="h-14 w-auto rounded-xl shadow-sm ring-1 ring-unicive-900/10"
          />
          <span className="sr-only">Unicive Polo Caruaru</span>
        </a>
        <span className="hidden rounded-full bg-unicive-50 px-3 py-1 text-xs font-medium text-unicive-700 ring-1 ring-unicive-100 sm:inline-block">
          Jornada do Aluno
        </span>
      </div>
    </header>
  );
}
