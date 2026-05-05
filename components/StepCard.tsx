"use client";

import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import type { Step } from "@/lib/steps";

type StepCardProps = {
  step: Step;
  done: boolean;
  onAction: (step: Step) => void;
};

export default function StepCard({ step, done, onAction }: StepCardProps) {
  const Icon = step.icon;
  const isExternal = Boolean(step.link);

  return (
    <article
      className={`transition-card rounded-2xl border p-5 shadow-card sm:p-6 ${
        done
          ? "border-emerald-200 bg-emerald-50/40"
          : "border-slate-200 bg-white hover:border-unicive-200"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${
            done
              ? "bg-emerald-100 text-emerald-700"
              : "bg-unicive-50 text-unicive-700"
          }`}
          aria-hidden
        >
          {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`text-xs font-semibold uppercase tracking-wide ${
                done ? "text-emerald-700" : "text-unicive-700"
              }`}
            >
              Passo {step.number}
            </span>

            {step.badge && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800 ring-1 ring-amber-200">
                <AlertCircle className="h-3 w-3" aria-hidden />
                {step.badge}
              </span>
            )}

            {done && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-800">
                <Check className="h-3 w-3" aria-hidden />
                Concluído
              </span>
            )}
          </div>

          <h3
            className={`mt-1 text-lg font-semibold leading-snug sm:text-xl ${
              done ? "text-slate-500 line-through" : "text-slate-900"
            }`}
          >
            {step.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
            {step.description}
          </p>

          {step.highlight && (
            <div className="mt-4 inline-flex flex-col rounded-xl border border-dashed border-unicive-300 bg-unicive-50/60 px-4 py-3">
              <span className="text-[11px] font-medium uppercase tracking-wider text-unicive-700">
                {step.highlight.label}
              </span>
              <span className="mt-0.5 font-mono text-2xl font-bold tracking-wider text-unicive-800">
                {step.highlight.value}
              </span>
            </div>
          )}

          <div className="mt-5">
            <button
              type="button"
              onClick={() => onAction(step)}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${
                done
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-unicive-700 text-white hover:bg-unicive-800"
              } focus:outline-none focus:ring-2 focus:ring-unicive-500/40 focus:ring-offset-2`}
            >
              {done ? (
                <>
                  <Check className="h-4 w-4" aria-hidden />
                  Concluído
                </>
              ) : (
                <>
                  {step.buttonLabel}
                  {isExternal && (
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
