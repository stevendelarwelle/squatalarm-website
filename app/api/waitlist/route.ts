import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * TODO: this does not persist signups anywhere yet -- it only validates the
 * email and logs it to the server console (visible in Vercel's function
 * logs, but not queryable or exportable). Wire this up to real storage
 * before relying on it to actually capture a waitlist, e.g.:
 *   - Firestore: reuse the same Firebase project as the iOS app's backend
 *     (add a `waitlist` collection, write with firebase-admin using a
 *     service account key stored as a Vercel env var)
 *   - A third-party list provider (Mailchimp, Resend audiences, Formspree)
 */
export async function POST(request: Request) {
  let email: unknown;

  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address." },
      { status: 400 }
    );
  }

  console.log("[waitlist] signup:", email);

  return NextResponse.json({ ok: true });
}
