import { About } from "@/components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <About />
        <Services />
      </main>
    </>
  );
}
