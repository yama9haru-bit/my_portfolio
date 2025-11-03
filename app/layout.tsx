import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: {
    default: "Haruto Yamao | Portfolio",
    template: "%s | Haruto Yamao",
  },
  description:
    "Haruto Yamaoのポートフォリオサイト。フロントエンド開発とインタラクティブデザインの制作実績やコンセプトを紹介します。",
  keywords: [
    "Haruto Yamao",
    "Portfolio",
    "Frontend Engineer",
    "Creative Developer",
    "UI/UX",
  ],
  authors: [{ name: "Haruto Yamao" }],
  openGraph: {
    title: "Haruto Yamao | Portfolio",
    description:
      "Haruto Yamaoのポートフォリオサイト。フロントエンド開発とインタラクティブデザインの制作実績やコンセプトを紹介します。",
    siteName: "Haruto Yamao Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haruto Yamao | Portfolio",
    description:
      "Haruto Yamaoのポートフォリオサイト。フロントエンド開発とインタラクティブデザインの制作実績やコンセプトを紹介します。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-900" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_rgba(15,23,42,0.95))]" />
          <div className="pointer-events-none absolute inset-x-[-20%] top-[-40%] -z-10 h-[60vh] rounded-full bg-cyan-400/24 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-[-30%] bottom-[-45%] -z-10 h-[65vh] rounded-full bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent blur-3xl" />

          <header className="mx-auto w-full max-w-5xl px-6 py-10">
            <div className="glass-panel relative flex items-center justify-between overflow-hidden rounded-2xl px-6 py-5">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/18 via-transparent to-cyan-500/12" />
              <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
              <Link
                href="/"
                className="bg-gradient-to-r from-cyan-200 via-sky-300 to-cyan-100 bg-clip-text text-xs font-semibold uppercase tracking-[0.45em] text-transparent"
              >
                Haruto Yamao
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
                <Link href="/" className="transition-colors hover:text-cyan-300">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="transition-colors hover:text-cyan-300"
                >
                  About
                </Link>
                <Link
                  href="/works"
                  className="transition-colors hover:text-cyan-300"
                >
                  Works
                </Link>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-cyan-300"
                >
                  Contact
                </Link>
              </nav>
              <a
                href="mailto:yama9haru@gmail.com"
                className="relative rounded-full border border-white/20 bg-gradient-to-r from-transparent via-white/5 to-transparent px-5 py-2 text-sm font-medium tracking-wide text-slate-100 transition hover:border-cyan-300/60 hover:from-cyan-500/20 hover:via-cyan-400/25 hover:to-cyan-500/20 hover:text-cyan-100"
              >
                Say hello
              </a>
            </div>
          </header>

          <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-24">
            <div className="glass-panel relative overflow-hidden rounded-3xl p-8 shadow-[0_30px_90px_-45px_rgba(8,47,73,0.85)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/18 via-transparent to-slate-900/35" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
              <div className="relative">{children}</div>
            </div>
          </main>

          <footer className="mx-auto w-full max-w-5xl px-6 pb-10 text-sm text-slate-400">
            <div className="glass-panel relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/12 to-transparent" />
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
              <p>© {currentYear} Haruto Yamao. All rights reserved.</p>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Crafted in Kyoto with curiosity.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
