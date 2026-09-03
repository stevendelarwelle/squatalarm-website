import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Support — Squat Alarm",
  description: "Get help with Squat Alarm.",
};

export default function Support() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Support
          </h1>

          <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              Have a question, found a bug, or need help with Squat Alarm?
              Reach out and we&rsquo;ll get back to you as soon as we can.
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:stevendelarwelle@gmail.com"
                className="text-accent hover:underline"
              >
                stevendelarwelle@gmail.com
              </a>
            </p>

            <p>
              <Link href="/" className="text-accent hover:underline">
                &larr; Back to home
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
