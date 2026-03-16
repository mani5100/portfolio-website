import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Rehman | Portfolio",
  description:
    "Software Engineer portfolio showcasing projects, skills, and professional experience.",
  keywords: ["Abdul Rehman", "Software Engineer", "Portfolio", "Web Developer"],
  authors: [{ name: "Abdul Rehman" }],
  openGraph: {
    title: "Abdul Rehman | Portfolio",
    description: "Software Engineer portfolio showcasing projects, skills, and professional experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
