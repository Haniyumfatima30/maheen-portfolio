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

export const metadata: Metadata = {
  title: "Maheen Fatima | Full Stack Web Developer",
  description:
    "Portfolio of Maheen Fatima — Full Stack Developer building modern, performant, and delightful web experiences with Next.js, React, and TypeScript.",
  keywords: [
    "Maheen Fatima",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Maheen Fatima" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
