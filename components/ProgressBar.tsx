"use client";

import { CheckCircle2, RotateCcw } from "lucide-react";

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
          <div className="flex items-center gap-2">
            <CheckCircle2
              className={`h-5 w-5 ${
                allDone ? "text-emerald-600" : "text-unicive-600"
              }`}
              aria-hidden
            />
            <p className="text-sm font-medium text-slate-700">
              Você concluiu{" "}
              <span className="font-semibold text-slate-900">{completed}</span>{" "}
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
            Refazer checklist
          </button>
        </div>

        <div
          className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={completed}
        >
          <div
            className={`h-full rounded-full transition-[width] duration-500 ease-out ${
              allDone
                ? "bg-emerald-500"
                : "bg-gradient-to-r from-unicive-500 to-unicive-700"
            }`}
            style={{ width: `${percent}%` }}
          />
        </div>

        {allDone && (
          <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
            Tudo certo! Agora é só aguardar seu acesso acadêmico e acompanhar as
            orientações do suporte.
          </p>
        )}
      </div>
    </section>
  );
}
