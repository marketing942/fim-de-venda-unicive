"use client";

import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import type { Step, StepLink } from "@/lib/steps";

type StepCardProps = {
  step: Step;
  done: boolean;
  onComplete: (stepId: string) => void;
  onOpenLink: (stepId: string, href: string) => void;
};

export default function StepCard({
  step,
  done,
  onComplete,
  onOpenLink,
}: StepCardProps) {
  const hasMultipleLinks = Array.isArray(step.links) && step.links.length > 0;

  return (
    <article
      className={`transition-card rounded-2xl border p-5 shadow-card sm:p-6 ${
        done
          ? "border-unicive-200 bg-unicive-50/50"
          : "border-slate-200 bg-white hover:border-unicive-200"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl ${
            done
              ? "bg-unicive-100 ring-1 ring-unicive-200"
              : "bg-unicive-50 ring-1 ring-unicive-100"
          }`}
        >
          {done ? (
            <Check className="h-6 w-6 text-unicive-700" />
          ) : (
            <span>{step.emoji}</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`text-xs font-semibold uppercase tracking-wide ${
                done ? "text-unicive-700" : "text-unicive-700"
              }`}
            >
              Passo {step.number}
            </span>

            {step.badge && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2 py-0.5 text-[11px] font-medium text-accent-700 ring-1 ring-accent-200">
                <AlertCircle className="h-3 w-3" aria-hidden />
                {step.badge}
              </span>
            )}

            {done && (
              <span className="inline-flex items-center gap-1 rounded-full bg-unicive-100 px-2 py-0.5 text-[11px] font-medium text-unicive-800">
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
            <div className="mt-4 inline-flex flex-col rounded-xl border border-dashed border-unicive-300 bg-unicive-50/70 px-4 py-3">
              <span className="text-[11px] font-medium uppercase tracking-wider text-unicive-700">
                {step.highlight.label}
              </span>
              <span className="mt-0.5 font-mono text-2xl font-bold tracking-wider text-unicive-800">
                {step.highlight.value}
              </span>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2.5">
            {done ? (
              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-unicive-700 px-5 py-2.5 text-sm font-medium text-white"
              >
                <Check className="h-4 w-4" aria-hidden />
                Concluído
              </button>
            ) : hasMultipleLinks ? (
              <>
                {step.links!.map((l: StepLink) => (
                  <button
                    key={l.href}
                    type="button"
                    onClick={() => onOpenLink(step.id, l.href)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-unicive-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-unicive-800 focus:outline-none focus:ring-2 focus:ring-unicive-500/40 focus:ring-offset-2"
                  >
                    {l.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => onComplete(step.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-unicive-200 bg-white px-5 py-2.5 text-sm font-medium text-unicive-800 transition-colors hover:border-unicive-300 hover:bg-unicive-50"
                >
                  {step.buttonLabel}
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (step.link) onOpenLink(step.id, step.link);
                  else onComplete(step.id);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-unicive-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-unicive-800 focus:outline-none focus:ring-2 focus:ring-unicive-500/40 focus:ring-offset-2"
              >
                {step.buttonLabel}
                {step.link && <ArrowUpRight className="h-4 w-4" aria-hidden />}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
