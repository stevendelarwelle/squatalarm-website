import { AppStoreButton } from "./AppStoreButton";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <AppStoreButton size="compact" />
      </div>
    </header>
  );
}
