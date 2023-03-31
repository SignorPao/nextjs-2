import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Inter, Fira_Code } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fira = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${fira.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
