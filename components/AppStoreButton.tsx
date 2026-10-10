const APP_STORE_URL =
  "https://apps.apple.com/us/app/squat-alarm-squats-stop-alarm/id6805965605";

const sizes = {
  default: {
    wrapper: "gap-3 px-5 py-2.5",
    icon: "h-7 w-7",
    eyebrow: "text-[11px]",
    title: "text-xl",
  },
  compact: {
    wrapper: "gap-2 px-3 py-1.5",
    icon: "h-5 w-5",
    eyebrow: "text-[9px]",
    title: "text-sm",
  },
};

export function AppStoreButton({
  size = "default",
  className = "",
}: {
  size?: keyof typeof sizes;
  className?: string;
}) {
  const s = sizes[size];

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Squat Alarm on the App Store"
      className={`inline-flex items-center rounded-xl bg-white text-black transition hover:brightness-95 ${s.wrapper} ${className}`}
    >
      <svg viewBox="0 0 384 512" className={`fill-current ${s.icon}`} aria-hidden="true">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 8 184.5 8 272.9c0 26.1 4.8 53.1 14.4 80.9 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-65.7-90-65.7-90.9zM256.7 110.1c27-32.1 24.6-61.4 23.8-71.9-23.9 1.4-51.6 16.4-67.4 34.9-17.4 19.8-27.7 44.4-25.5 71.3 25.4 2 48.5-10.9 69.1-34.3z" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className={s.eyebrow}>Download on the</span>
        <span className={`font-semibold ${s.title}`}>App Store</span>
      </span>
    </a>
  );
}
