"use client";

import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import type { Step, StepLink } from "@/lib/steps";

type StepCardProps = {
  step: Step;
  done: boolean;
  onComplete: (stepId: string) => void;
  onOpenLink: (stepId: string, href: string) => void;
};

const primaryBtn =
  "group inline-flex items-center justify-center gap-2 rounded-xl " +
  "bg-gradient-to-br from-accent-400 to-accent-500 " +
  "px-5 py-2.5 text-sm font-semibold text-unicive-900 " +
  "shadow-md shadow-accent-500/30 ring-1 ring-accent-500/20 " +
  "transition-all duration-200 ease-out " +
  "hover:from-accent-300 hover:to-accent-400 " +
  "hover:shadow-lg hover:shadow-accent-500/40 hover:-translate-y-0.5 " +
  "focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2";

const secondaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-xl " +
  "border border-unicive-200 bg-white px-5 py-2.5 text-sm font-medium " +
  "text-unicive-800 transition-colors hover:border-unicive-300 hover:bg-unicive-50 " +
  "focus:outline-none focus:ring-2 focus:ring-unicive-500/30 focus:ring-offset-2";

const doneBtn =
  "inline-flex items-center justify-center gap-2 rounded-xl " +
  "bg-unicive-700 px-5 py-2.5 text-sm font-medium text-white " +
  "shadow-sm shadow-unicive-700/20 cursor-default";

export default function StepCard({
  step,
  done,
  onComplete,
  onOpenLink,
}: StepCardProps) {
  const hasMultipleLinks = Array.isArray(step.links) && step.links.length > 0;

  return (
    <article
      className={`transition-card relative overflow-hidden rounded-2xl border p-5 shadow-card sm:p-6 ${
        done
          ? "border-unicive-200 bg-unicive-50/40"
          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-unicive-200 hover:shadow-lg"
      }`}
    >
      <span
        aria-hidden
        className={`absolute left-0 top-0 h-full w-1 ${
          done
            ? "bg-unicive-500"
            : "bg-gradient-to-b from-accent-400 to-accent-500"
        }`}
      />

      <div className="flex items-start gap-4">
        <div
          aria-hidden
          className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${
            done
              ? "bg-unicive-100 ring-1 ring-unicive-200"
              : "bg-gradient-to-br from-accent-50 to-unicive-50 ring-1 ring-unicive-100"
          }`}
        >
          {done ? (
            <Check className="h-6 w-6 text-unicive-700" strokeWidth={3} />
          ) : (
            <span className="drop-shadow-sm">{step.emoji}</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-unicive-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-unicive-700 ring-1 ring-unicive-100">
              Passo {step.number}
            </span>

            {step.badge && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2.5 py-0.5 text-[11px] font-semibold text-accent-700 ring-1 ring-accent-200">
                <AlertCircle className="h-3 w-3" aria-hidden />
                {step.badge}
              </span>
            )}

            {done && (
              <span className="inline-flex items-center gap-1 rounded-full bg-unicive-600 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                <Check className="h-3 w-3" aria-hidden strokeWidth={3} />
                Concluído
              </span>
            )}
          </div>

          <h3
            className={`mt-2 text-lg font-semibold leading-snug sm:text-xl ${
              done ? "text-slate-500 line-through" : "text-slate-900"
            }`}
          >
            {step.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
            {step.description}
          </p>

          {step.highlight && (
            <div className="mt-4 inline-flex flex-col rounded-xl bg-gradient-to-br from-unicive-700 to-unicive-800 px-5 py-3 shadow-md shadow-unicive-700/20">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-300">
                {step.highlight.label}
              </span>
              <span className="mt-0.5 font-mono text-2xl font-extrabold tracking-wider text-white">
                {step.highlight.value}
              </span>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2.5">
            {done ? (
              <button type="button" disabled className={doneBtn}>
                <Check className="h-4 w-4" aria-hidden strokeWidth={3} />
                Concluído
              </button>
            ) : hasMultipleLinks ? (
              <>
                {step.links!.map((l: StepLink) => (
                  <button
                    key={l.href}
                    type="button"
                    onClick={() => onOpenLink(step.id, l.href)}
                    className={primaryBtn}
                  >
                    {l.label}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => onComplete(step.id)}
                  className={secondaryBtn}
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
                className={primaryBtn}
              >
                {step.buttonLabel}
                {step.link && (
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
