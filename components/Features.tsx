const features = [
  {
    title: "Motion-verified reps",
    description:
      "A real squat state machine checks depth, timing, and form — not just that your phone moved.",
  },
  {
    title: "No snooze loophole",
    description:
      "There's no snooze button to tap your way out of. The only way out is finishing the set.",
  },
  {
    title: "Breaks through Silent Mode",
    description:
      "Built on iOS AlarmKit, so it rings on your Lock Screen and Dynamic Island even in Focus.",
  },
  {
    title: "Customizable squat count",
    description:
      "Start at 15, or dial it up to 50 as you build the habit. Free tier keeps it simple at 15.",
  },
  {
    title: "Streaks & history",
    description:
      "See every alarm you've actually earned your way out of, and how long it took.",
  },
  {
    title: "Private by design",
    description:
      "Your alarms and session history are tied to your account only — never shared or sold.",
  },
];

export function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Built to actually get you up
        </h2>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="mb-3 h-1.5 w-8 rounded-full bg-accent" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted text-pretty">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
