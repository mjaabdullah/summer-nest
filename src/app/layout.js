import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
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

export const metadata = {
  title: "SummerNest | Your Summer Essentials Hub",
  description:
    "Find everything you need to stay cool and comfortable during summer, all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 bg-linear-to-r from-sky-50 to-orange-50/10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
