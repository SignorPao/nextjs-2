import Head from "next/head";

import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import Instagram from "@/components/Instagram";

import { sliderData } from "@/data/sliderData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mark Powell Photography | NEXT.js App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        heading="Mark Powell Photography"
        message="I capture moments in nature and keep them alive."
      />

      <Slider slides={sliderData} />

      <Instagram />
    </>
  );
}
