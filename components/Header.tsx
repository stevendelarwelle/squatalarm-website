import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <Link
          href="#signup"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
        >
          Notify Me
        </Link>
      </div>
    </header>
  );
}
