import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Shefatullah Bin Sadik | CSE Undergraduate & Developer",

  description:
    "Official portfolio of Md. Shefatullah Bin Sadik — Computer Science and Engineering undergraduate, developer, and machine learning enthusiast.",

  keywords: [
    "Md. Shefatullah Bin Sadik",
    "Shefatullah Bin Sadik",
    "Shefatullah",
    "CSE student",
    "Computer Science",
    "Machine Learning",
    "Web Developer",
    "Portfolio",
    "NSU"
  ],

  authors: [
    {
      name: "Md. Shefatullah Bin Sadik",
    },
  ],

  creator: "Md. Shefatullah Bin Sadik",

  openGraph: {
    title: "Md. Shefatullah Bin Sadik | Portfolio",
    description:
      "Computer Science and Engineering undergraduate, developer, and ML enthusiast.",
    type: "website",
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