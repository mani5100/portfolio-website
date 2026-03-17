import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulrehmanshoukat.com"),
  title: "Abdul Rehman | AI Engineer & Published Researcher",
  description:
    "AI Engineer and published researcher with 6 peer-reviewed papers across IEEE, Wiley, and Springer. Builds AI systems that ship — multi-agent pipelines, edge-deployed surveillance, voice agents.",
  keywords: [
    "Abdul Rehman",
    "AI Engineer",
    "Published Researcher",
    "LangGraph",
    "LangChain",
    "Computer Vision",
    "Deep Learning",
    "Portfolio",
    "Pakistan",
  ],
  authors: [{ name: "Abdul Rehman", url: "https://abdulrehmanshoukat.com" }],
  openGraph: {
    title: "Abdul Rehman | AI Engineer & Published Researcher",
    description:
      "AI Engineer and published researcher with 6 peer-reviewed papers across IEEE, Wiley, and Springer. Builds AI systems that ship — multi-agent pipelines, edge-deployed surveillance, voice agents.",
    url: "https://abdulrehmanshoukat.com",
    siteName: "Abdul Rehman",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman | AI Engineer & Published Researcher",
    description:
      "AI Engineer and published researcher with 6 peer-reviewed papers across IEEE, Wiley, and Springer. Builds AI systems that ship.",
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
        <CustomCursor />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
