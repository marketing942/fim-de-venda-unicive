"use client";

import { CheckCircle2, RotateCcw, Sparkles } from "lucide-react";

type ProgressBarProps = {
  completed: number;
  total: number;
  onReset: () => void;
};

export default function ProgressBar({
  completed,
  total,
  onReset,
}: ProgressBarProps) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  const allDone = completed === total && total > 0;

  return (
    <section className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-unicive-50 ring-1 ring-unicive-100">
              <CheckCircle2
                className="h-5 w-5 text-unicive-700"
                aria-hidden
              />
            </div>
            <p className="text-sm font-medium text-slate-700">
              Você concluiu{" "}
              <span className="text-base font-bold text-unicive-700">
                {completed}
              </span>{" "}
              de <span className="font-semibold text-slate-900">{total}</span>{" "}
              passos
            </p>
          </div>

          <button
            type="button"
            onClick={onReset}
            disabled={completed === 0}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            Reiniciar lista de tarefas
          </button>
        </div>

        <div
          className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-100 ring-1 ring-inset ring-slate-200/70"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={completed}
        >
          <div
            className="relative h-full rounded-full bg-gradient-to-r from-unicive-600 via-unicive-500 to-accent-400 shadow-sm transition-[width] duration-500 ease-out"
            style={{ width: `${percent}%` }}
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent"
            />
          </div>
        </div>

        {allDone && (
          <p className="mt-4 flex items-start gap-2 rounded-xl bg-gradient-to-br from-unicive-50 to-accent-50 px-4 py-3 text-sm font-medium text-unicive-800 ring-1 ring-unicive-100">
            <Sparkles
              className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
              aria-hidden
            />
            Tudo certo! Agora é só aguardar seu acesso acadêmico e acompanhar as
            orientações do suporte.
          </p>
        )}
      </div>
    </section>
  );
}
