"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { steps, supportLink } from "@/lib/steps";
import ProgressBar from "./ProgressBar";
import StepCard from "./StepCard";

const STORAGE_KEY = "unicive-proximos-passos:v2";

export default function Checklist() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          setCompleted(parsed);
        }
      }
    } catch {
      // ignore corrupted storage
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      // ignore quota errors
    }
  }, [completed, hydrated]);

  const completedCount = useMemo(
    () => steps.filter((s) => completed[s.id]).length,
    [completed],
  );

  const handleComplete = useCallback((stepId: string) => {
    setCompleted((prev) => ({ ...prev, [stepId]: true }));
  }, []);

  const handleOpenLink = useCallback((stepId: string, href: string) => {
    setCompleted((prev) => ({ ...prev, [stepId]: true }));
    window.open(href, "_blank", "noopener,noreferrer");
  }, []);

  const handleReset = useCallback(() => {
    setCompleted({});
  }, []);

  return (
    <>
      <ProgressBar
        completed={hydrated ? completedCount : 0}
        total={steps.length}
        onReset={handleReset}
      />

      <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-4 sm:gap-5">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              done={hydrated ? Boolean(completed[step.id]) : false}
              onComplete={handleComplete}
              onOpenLink={handleOpenLink}
            />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-unicive-700/30 bg-gradient-to-br from-unicive-700 to-unicive-800 p-6 text-white shadow-card sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl"
              >
                🎧
              </div>
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">
                  Precisa de ajuda?
                </h3>
                <p className="mt-1 max-w-xl text-sm text-unicive-100 sm:text-[0.95rem]">
                  Após os passos anteriores, nosso suporte entrará em contato
                  com você. Se precisar de ajuda antes disso, fale com a gente
                  pelo canal oficial. Esse contato é opcional e não é necessário
                  para concluir sua jornada.
                </p>
              </div>
            </div>
            <a
              href={supportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent-400 px-5 py-2.5 text-sm font-semibold text-unicive-900 transition-colors hover:bg-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-unicive-800"
            >
              Falar com o suporte
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
