import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Shefatullah Bin Sadik | Portfolio",
  description:
    "Portfolio of Md. Shefatullah Bin Sadik — CSE undergraduate, developer, ML enthusiast and student leader.",
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