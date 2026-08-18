const SIZE = 220;
const STROKE = 14;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const REPS = 12;
const TARGET = 15;
const PROGRESS = REPS / TARGET;

/** A static mock of the app's live Squat Verification counter, for the hero visual. */
export function RepRingMock() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[2.5rem] bg-black">
      <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-accent/10 via-transparent to-transparent" />

      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <span className="animate-pulse-ring absolute inset-0 rounded-full border border-accent/40" />
        <svg width={SIZE} height={SIZE} className="-rotate-90">
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="var(--color-surface-elevated)"
            strokeWidth={STROKE}
          />
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - PROGRESS)}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-6xl font-bold tabular-nums text-white">
            {REPS}
          </span>
          <span className="mt-1 text-sm font-medium text-muted">
            of {TARGET} squats
          </span>
        </div>
      </div>

      <p className="mt-8 max-w-[220px] text-center text-sm text-muted">
        3 more squats and the alarm finally stops.
      </p>
    </div>
  );
}
