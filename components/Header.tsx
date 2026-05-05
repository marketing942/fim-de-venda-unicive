import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-unicive-800 shadow-sm">
      <div className="mx-auto flex h-20 w-full max-w-5xl items-center justify-center px-4 sm:px-6">
        <a
          href="/"
          aria-label="Unicive Polo Caruaru — início"
          className="flex items-center justify-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-accent-300/70"
        >
          <Image
            src="/logo-polo-caruaru.png"
            alt="Unicive — Polo Caruaru PE"
            width={1080}
            height={1350}
            priority
            className="h-14 w-auto rounded-xl ring-1 ring-white/10"
          />
          <span className="sr-only">Unicive Polo Caruaru</span>
        </a>
      </div>
    </header>
  );
}
