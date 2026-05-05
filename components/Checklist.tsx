"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { LifeBuoy } from "lucide-react";
import { steps, type Step } from "@/lib/steps";
import ProgressBar from "./ProgressBar";
import StepCard from "./StepCard";

const STORAGE_KEY = "unicive-proximos-passos:v1";

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

  const handleAction = useCallback((step: Step) => {
    setCompleted((prev) => ({ ...prev, [step.id]: true }));
    if (step.link) {
      window.open(step.link, "_blank", "noopener,noreferrer");
    }
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
              onAction={handleAction}
            />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-unicive-100 bg-gradient-to-br from-unicive-700 to-unicive-800 p-6 text-white shadow-card sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <LifeBuoy className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">
                  Precisa de ajuda em algum passo?
                </h3>
                <p className="mt-1 max-w-xl text-sm text-unicive-100 sm:text-[0.95rem]">
                  Nosso time do Polo Caruaru está pronto para te orientar. Fale
                  com o suporte oficial sempre que tiver dúvidas.
                </p>
              </div>
            </div>
            <a
              href="https://links.cppem.com.br/unicv-suporte-aluno"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-unicive-800 transition-colors hover:bg-unicive-50"
            >
              Falar com suporte
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
