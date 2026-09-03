import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <Logo />
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Squat Alarm. Not affiliated with Apple Inc.
        </p>
        <div className="flex gap-6">
          <Link href="/support" className="text-sm text-muted hover:text-foreground">
            Support
          </Link>
          <Link href="/privacy" className="text-sm text-muted hover:text-foreground">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
