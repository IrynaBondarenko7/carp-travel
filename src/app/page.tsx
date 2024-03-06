import { About } from "@/components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "@/components/Services";
import { Career } from "@/components/Career";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <About />
        <Services />
        <Career />
        <Gallery />
      </main>
    </>
  );
}
