const steps = [
  {
    number: "01",
    title: "Set your alarm",
    description:
      "Pick a time, choose your repeat days, and set how many squats it'll take to dismiss it. 15 by default.",
  },
  {
    number: "02",
    title: "It goes off — for real",
    description:
      "Squat Alarm breaks through Silent Mode and Focus, right on your Lock Screen and Dynamic Island.",
  },
  {
    number: "03",
    title: "Squat to dismiss",
    description:
      "Your phone's motion sensors count real reps as you do them. Shakes and fake movements don't count.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-mono text-sm font-semibold text-accent">
                {step.number}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted text-pretty">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
