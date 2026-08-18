import { SignupForm } from "./SignupForm";

export function CtaSignup() {
  return (
    <section id="signup" className="py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Be the first to wake up right.
        </h2>
        <p className="mt-4 text-muted">
          Squat Alarm is coming to iOS. Leave your email and we&apos;ll let
          you know the moment it&apos;s available to download.
        </p>
        <div className="mt-8 flex justify-center">
          <SignupForm className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}
