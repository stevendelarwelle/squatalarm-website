import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy — Squat Alarm",
  description: "Privacy Policy for Squat Alarm, operated by One Zero Apps LLC.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: September 3, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              One Zero Apps LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates Squat Alarm (the &ldquo;App&rdquo;).
              This Privacy Policy explains how we collect, use, and protect
              information when you use the App.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Information We Collect
              </h2>
              <p className="mt-3">
                If you sign up to be notified about the App, we collect the
                email address you provide. The App itself is designed to
                function using on-device motion sensors to verify squats; we
                do not collect or transmit your movement data to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                How We Use Information
              </h2>
              <p className="mt-3">
                We use the email address you provide solely to notify you
                about the App&rsquo;s availability and updates. We do not
                sell or rent your information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Data Sharing
              </h2>
              <p className="mt-3">
                We do not share your personal information with third parties,
                except as required to operate our services (such as our email
                delivery provider) or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Data Retention
              </h2>
              <p className="mt-3">
                We retain the information you provide for as long as needed
                to fulfill the purposes described in this policy, or until
                you request its deletion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Your Rights
              </h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of your
                personal information at any time by contacting us at the
                email address below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Children&rsquo;s Privacy
              </h2>
              <p className="mt-3">
                The App is not directed to children under 13, and we do not
                knowingly collect personal information from children under
                13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Contact Us
              </h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <p className="mt-3">
                One Zero Apps LLC
                <br />
                5017 Ripp Rd.
                <br />
                Sturgeon Bay, WI 54235
                <br />
                Email:{" "}
                <a
                  href="mailto:stevendelarwelle@gmail.com"
                  className="text-accent hover:underline"
                >
                  stevendelarwelle@gmail.com
                </a>
              </p>
            </section>

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
