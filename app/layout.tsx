import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Md. Shefatullah Bin Sadik | AI/ML & Software Developer",
    template: "%s | Md. Shefatullah Bin Sadik",
  },

  description:
    "Portfolio of Md. Shefatullah Bin Sadik, a Computer Science and Engineering undergraduate at North South University focused on AI, Machine Learning, NLP, LLMs, and software development.",

  keywords: [
    "Md. Shefatullah Bin Sadik",
    "Shefatullah Bin Sadik",
    "Shefatullah",
    "CSE Undergraduate",
    "North South University",
    "NSU",
    "Artificial Intelligence",
    "Machine Learning",
    "AI/ML",
    "Natural Language Processing",
    "NLP",
    "Large Language Models",
    "LLM",
    "Software Development",
    "Python",
    "Portfolio",
  ],

  authors: [
    {
      name: "Md. Shefatullah Bin Sadik",
      url: "https://github.com/sifat2200",
    },
  ],

  creator: "Md. Shefatullah Bin Sadik",

  metadataBase: new URL("https://shefatullah-portfolio.vercel.app"),

  openGraph: {
    title: "Md. Shefatullah Bin Sadik | AI/ML & Software Developer",
    description:
      "CSE undergraduate at North South University focused on AI/ML, NLP, LLMs, and software development.",
    type: "website",
    locale: "en_US",
    siteName: "Md. Shefatullah Bin Sadik — Portfolio",
    url: "https://shefatullah-portfolio.vercel.app",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md. Shefatullah Bin Sadik | AI/ML & Software Developer",
    description:
      "CSE undergraduate focused on AI/ML, NLP, LLMs, and software development.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
