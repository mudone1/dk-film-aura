import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import RateCard from "@/components/RateCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Gallery />
      <About />
      <Skills />
      <Experience />
      <RateCard />
      <Footer />
    </main>
  );
}
