import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Text shown in the small monitor label/tag */
  modelLabel?: string;
};

export function CrtScreen({
  children,
  modelLabel = "APPLE ][ · 80-COL · 60Hz",
}: Props) {
  return (
    <div className="case-bezel">
      {/* outer monitor lip / power tally */}
      <div className="mb-3 flex items-center justify-between px-1 font-display text-sm tracking-wider text-[#2a2418]">
        <span className="opacity-70">{modelLabel}</span>
        <span className="flex items-center gap-2 opacity-80">
          <span className="power-led" aria-hidden />
          <span>READY</span>
        </span>
      </div>

      {/* the screen itself */}
      <div className="crt min-h-[60vh] px-6 py-8 sm:px-10 sm:py-10">
        {children}
      </div>

      {/* monitor base / vent slats */}
      <div className="mt-4 flex items-center justify-between gap-3 px-1">
        <div className="flex-1">
          <div
            aria-hidden
            className="h-3 rounded-sm"
            style={{
              background:
                "repeating-linear-gradient(to right, var(--case-deeper) 0 2px, transparent 2px 7px)",
              opacity: 0.5,
            }}
          />
        </div>
        <span className="font-display text-xs tracking-[0.3em] text-[#2a2418]/70">
          MONITOR ][
        </span>
        <div className="flex-1">
          <div
            aria-hidden
            className="h-3 rounded-sm"
            style={{
              background:
                "repeating-linear-gradient(to right, var(--case-deeper) 0 2px, transparent 2px 7px)",
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
}
