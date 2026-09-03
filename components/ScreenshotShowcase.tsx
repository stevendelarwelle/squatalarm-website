import Image from "next/image";

const screenshots = [
  { file: "2.png", alt: "Squat Alarm list showing three scheduled alarms" },
  { file: "3.png", alt: "Squat Alarm ringing on the iPhone Lock Screen" },
  { file: "1.png", alt: "Creating a new alarm with a squat count in Squat Alarm" },
  { file: "4.png", alt: "Live squat counter tracking reps to silence the alarm" },
];

export function ScreenshotShowcase() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          See it in action
        </h2>
        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.file}
              className="w-[70vw] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-border sm:w-[45vw] md:w-full"
            >
              <Image
                src={`/screenshots/${screenshot.file}`}
                alt={screenshot.alt}
                width={1242}
                height={2688}
                className="h-auto w-full"
                sizes="(min-width: 768px) 22vw, 60vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
