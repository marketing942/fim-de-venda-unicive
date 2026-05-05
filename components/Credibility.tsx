type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "20+", label: "Anos de mercado nacional" },
  { value: "1.000+", label: "Alunos ativos no polo Caruaru" },
  { value: "500+", label: "Diplomas emitidos" },
  { value: "MEC", label: "Nota máxima — avaliação oficial" },
];

export default function Credibility() {
  return (
    <section className="relative mt-12 overflow-hidden bg-gradient-to-br from-unicive-700 via-unicive-800 to-unicive-900 text-white sm:mt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(800px 400px at 80% 0%, rgba(244, 164, 35, 0.10), transparent 60%), radial-gradient(700px 380px at 0% 100%, rgba(255,255,255,0.05), transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/15">
            Credibilidade
          </span>

          <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Uma instituição em que você pode confiar
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-unicive-100 sm:text-base">
            São mais de 20 anos transformando vidas com educação de qualidade e
            diploma reconhecido.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm sm:p-6"
            >
              <p className="text-3xl font-extrabold tracking-tight text-accent-300 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs text-unicive-100 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border-l-4 border-accent-400 bg-white/5 p-5 backdrop-blur-sm sm:mt-10 sm:p-6">
          <p className="text-sm leading-relaxed text-unicive-50 sm:text-[0.95rem]">
            A Unicive oferece cursos na modalidade EAD para quem busca
            praticidade, flexibilidade e uma formação reconhecida, com a
            segurança de estudar em uma instituição regularizada e com diploma
            válido em todo o Brasil.
          </p>
        </div>
      </div>
    </section>
  );
}
