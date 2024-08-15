import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import localFont from "next/font/local"

import Footer from "@/components/layout/Footer";


const neue = localFont({
  src : [
    {
      path : "../../public/fonts/ppneuemontreal-book.otf",
      weight : "400"
    },
    {
      path : "../../public/fonts/ppneuemontreal-medium.otf",
      weight : "500"
    },
    {
      path : "../../public/fonts/ppneuemontreal-bold.otf",
      weight : "700"
    },
  ],
  variable : "--font-neuemontreal"
})



export const metadata: Metadata = {
  title: "O. Riastanjung",
  description: "O. Riastanjung - Frontend Developer Portofolio Web Apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neue.variable} font-neuemontreal bg-zinc-900 text-slate-100 relative min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen"></div>
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/bgtexture.jpeg')] opacity-20 mix-blend-soft-light"></div>
      </body>
    </html>
  );
}
