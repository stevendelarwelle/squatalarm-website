const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Enough to prove the core loop works.",
    features: ["1 active alarm", "Fixed 15-squat target", "7-day session history"],
    highlighted: false,
  },
  {
    name: "Monthly",
    price: "$9.99",
    period: "per month",
    description: "Unlimited alarms, full customization.",
    features: [
      "Unlimited alarms",
      "Custom squat count (5–50)",
      "Full session history",
    ],
    highlighted: false,
  },
  {
    name: "Yearly",
    price: "$29",
    period: "per year",
    description: "Best value — save about 76%.",
    features: [
      "Unlimited alarms",
      "Custom squat count (5–50)",
      "Full session history",
    ],
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section className="border-t border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple pricing
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Free to start. Upgrade when you&apos;re ready for more than one alarm.
          Pricing goes live with the app — join the waitlist below to lock in
          launch pricing.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-accent bg-surface-elevated"
                  : "border-border bg-surface"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  BEST VALUE
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="ml-1 text-sm text-muted">{plan.period}</span>
              </p>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 text-accent">✓</span>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
