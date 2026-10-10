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
- `components/` — `Hero`, `HowItWorks`, `Features`, `Pricing`, `CtaSignup`, `AppStoreButton`, `Header`, `Footer`, plus the `PhoneFrame`/`RepRingMock` hero visual (a CSS/SVG mock of the app's live rep counter, not a real screenshot)
- `AppStoreButton` links straight to the [App Store listing](https://apps.apple.com/us/app/squat-alarm-squats-stop-alarm/id6805965605)

## Deploying on Vercel

1. Import this repo in Vercel (Next.js is auto-detected, no config needed).
2. Update `metadataBase`/Open Graph URLs in `app/layout.tsx` once a production domain is set.

## Brand

Colors and typography intentionally mirror the iOS app (dark background, single accent green `#66e043`, tabular-figure numerals for the rep counter) for visual consistency between the marketing site and the product.
