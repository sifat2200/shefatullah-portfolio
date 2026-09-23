import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Md. Shefatullah Bin Sadik | CSE Undergraduate • AI/ML • Software Development",
    template: "%s | Md. Shefatullah Bin Sadik",
  },

  description:
    "Portfolio of Md. Shefatullah Bin Sadik, a Computer Science and Engineering undergraduate at North South University interested in AI, Machine Learning, NLP, LLMs and software development.",

  keywords: [
    "Md. Shefatullah Bin Sadik",
    "Shefatullah Bin Sadik",
    "Shefatullah",
    "CSE Undergraduate",
    "Computer Science",
    "North South University",
    "NSU",
    "Artificial Intelligence",
    "Machine Learning",
    "AI ML",
    "Natural Language Processing",
    "NLP",
    "Large Language Models",
    "LLM",
    "Generative AI",
    "Software Development",
    "Python",
    "C++",
    "Java",
    "Portfolio",
    "Bangladesh",
  ],

  authors: [
    {
      name: "Md. Shefatullah Bin Sadik",
      url: "https://github.com/sifat2200",
    },
  ],

  creator: "Md. Shefatullah Bin Sadik",

  publisher: "Md. Shefatullah Bin Sadik",

  openGraph: {
    title:
      "Md. Shefatullah Bin Sadik | CSE Undergraduate • AI/ML • Software Development",

    description:
      "CSE undergraduate at North South University interested in AI/ML, NLP, LLMs, software development, leadership and technology-driven projects.",

    type: "website",

    locale: "en_US",

    siteName: "Md. Shefatullah Bin Sadik — Portfolio",

    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Md. Shefatullah Bin Sadik",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Md. Shefatullah Bin Sadik | CSE Undergraduate • AI/ML",

    description:
      "Portfolio of Md. Shefatullah Bin Sadik — CSE undergraduate interested in AI/ML, NLP, LLMs and software development.",

    images: ["/profile.jpg"],
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
