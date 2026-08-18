import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Squat Alarm — An alarm you can't fake your way out of";
const description =
  "Squat Alarm won't stop ringing until you've done 15 real, motion-verified squats. No shake-to-dismiss, no snooze loophole.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: "Squat Alarm",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Squat Alarm",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
