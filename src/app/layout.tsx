import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Header } from "@/components/Home_sections/sections/Header"
import { Footer } from "@/components/Home_sections/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className="relative">
        <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
