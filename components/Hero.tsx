import { PhoneFrame } from "./PhoneFrame";
import { RepRingMock } from "./RepRingMock";
import { SignupForm } from "./SignupForm";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 pt-16 pb-24 md:grid-cols-2 md:pt-24 md:pb-32">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Coming soon to iOS
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          An alarm you can&apos;t{" "}
          <span className="text-accent">fake your way out of.</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg text-muted text-pretty">
          Squat Alarm won&apos;t stop ringing until you&apos;ve done 15 real
          squats. Your phone&apos;s motion sensors verify every rep — no
          shake-to-dismiss, no snooze loophole, no going back to sleep.
        </p>

        <div className="mt-10 max-w-md">
          <SignupForm />
        </div>
      </div>

      <div className="mx-auto w-full max-w-xs md:max-w-sm">
        <PhoneFrame>
          <RepRingMock />
        </PhoneFrame>
      </div>
    </section>
  );
}
