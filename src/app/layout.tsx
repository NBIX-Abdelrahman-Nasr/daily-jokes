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
  title: "Daily Jokes - Your Daily Dose of Humor",
  description: "Get your daily dose of laughter with fresh jokes delivered every day. Brighten your day with our collection of witty humor and funny stories.",
  keywords: ["jokes", "humor", "daily jokes", "funny", "comedy", "laugh", "entertainment"],
  authors: [{ name: "Daily Jokes App" }],
  creator: "Daily Jokes App",
  publisher: "Daily Jokes App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://daily-jokes.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daily Jokes - Your Daily Dose of Humor",
    description: "Get your daily dose of laughter with fresh jokes delivered every day.",
    url: "https://daily-jokes.vercel.app",
    siteName: "Daily Jokes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Jokes - Your Daily Dose of Humor",
    description: "Get your daily dose of laughter with fresh jokes delivered every day.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
