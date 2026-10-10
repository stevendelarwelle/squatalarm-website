import { AppStoreButton } from "./AppStoreButton";

export function CtaSignup() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Start waking up right.
        </h2>
        <p className="mt-4 text-muted">
          Squat Alarm is available now on iOS. Download it and do your first
          set tomorrow morning.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}
