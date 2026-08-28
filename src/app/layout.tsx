import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pluginfy — AI-First Technology Firm",
  description:
    "An AI-first technology firm engineering production-grade AI systems for enterprise, government, and high-growth clients across the US, GCC, UK, and EU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{ background: "#07091A", minHeight: "100%" }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}