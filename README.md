# Squat Alarm — website

Marketing landing page for [Squat Alarm](https://github.com/stevendelarwelle/squatalarm), the iOS alarm app that won't stop ringing until you've done 15 motion-verified squats. Built with Next.js (App Router) + Tailwind CSS, meant to be deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — assembles the page from `components/`
- `components/` — `Hero`, `HowItWorks`, `Features`, `Pricing`, `CtaSignup`, `SignupForm`, `Header`, `Footer`, plus the `PhoneFrame`/`RepRingMock` hero visual (a CSS/SVG mock of the app's live rep counter, not a real screenshot)
- `app/api/waitlist/route.ts` — the signup form's submit endpoint

## ⚠️ Signup form does not persist anywhere yet

`SignupForm` posts to `/api/waitlist`, which validates the email and logs it to the server console — that's it. **No email is actually stored anywhere durable.** Before pointing real traffic at this site, wire that route up to real storage, for example:

- **Firestore** — reuse the same Firebase project as the iOS app's backend (add a `waitlist` collection under `firebase-admin`, authenticated with a service account key stored as a Vercel environment variable)
- **A list provider** — Mailchimp, Resend audiences, Formspree, etc.

See the TODO comment at the top of `app/api/waitlist/route.ts`.

## Deploying on Vercel

1. Import this repo in Vercel (Next.js is auto-detected, no config needed).
2. Once the signup backend above is wired up, add whatever environment variables it needs in the Vercel project settings.
3. Update `metadataBase`/Open Graph URLs in `app/layout.tsx` once a production domain is set.

## Brand

Colors and typography intentionally mirror the iOS app (dark background, single accent green `#66e043`, tabular-figure numerals for the rep counter) for visual consistency between the marketing site and the product.
