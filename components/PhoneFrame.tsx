import type { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[300px] rounded-[3rem] border-[6px] border-surface-elevated bg-black p-2 shadow-2xl shadow-black/60 ring-1 ring-border">
      <div className="absolute top-2 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="h-full w-full overflow-hidden rounded-[2.5rem]">
        {children}
      </div>
    </div>
  );
}
