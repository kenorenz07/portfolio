import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keno Renz Bacunawa | Full Stack Developer",
  description:
    "Full Stack Web & Mobile Developer with 5+ years of experience in Laravel, React, Next.js, React Native, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "Laravel",
    "React",
    "Next.js",
    "React Native",
  ],
  authors: [{ name: "Keno Renz Bacunawa" }],
  openGraph: {
    title: "Keno Renz Bacunawa | Full Stack Developer",
    description:
      "Full Stack Web & Mobile Developer specializing in modern web technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
              <Navbar />
              <main className="flex-grow pt-16 md:pt-20">{children}</main>
              <Footer />
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
