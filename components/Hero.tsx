export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-16">
      <div className="flex flex-col items-start gap-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-unicive-200 bg-white px-3 py-1 text-xs font-medium text-unicive-700 shadow-sm">
          <span aria-hidden>🎓</span>
          Unicive Polo Caruaru · Jornada do Aluno
        </span>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-[2.5rem]">
          Parabéns pela sua matrícula!{" "}
          <span className="text-unicive-700">
            Agora siga seus próximos passos.
          </span>
        </h1>

        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          Preparamos uma jornada simples para você concluir tudo com segurança e
          começar seus estudos da forma correta.
        </p>
      </div>
    </section>
  );
}
