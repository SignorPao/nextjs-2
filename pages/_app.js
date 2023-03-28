import "@/styles/globals.css";

import { Inter, Fira_Code } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fira = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${fira.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
