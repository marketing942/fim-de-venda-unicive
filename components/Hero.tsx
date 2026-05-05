export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-5xl px-4 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 right-0 h-40 w-40 rounded-full bg-accent-200/40 blur-3xl sm:h-56 sm:w-56"
      />
      <div className="relative flex flex-col items-start gap-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-unicive-200 bg-white px-3 py-1 text-xs font-semibold text-unicive-700 shadow-sm">
          <span aria-hidden>🎓</span>
          Unicive Polo Caruaru · Jornada do Aluno
        </span>

        <h1 className="font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-[3.25rem]">
          Parabéns pela sua matrícula!{" "}
          <span className="bg-gradient-to-r from-unicive-700 via-unicive-600 to-accent-500 bg-clip-text text-transparent">
            Agora siga seus próximos passos.
          </span>
        </h1>

        <p className="max-w-2xl text-base text-slate-700 sm:text-lg">
          Preparamos uma jornada simples para você concluir tudo com segurança e
          começar seus estudos da forma correta.
        </p>
      </div>
    </section>
  );
}
