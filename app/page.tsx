import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkList from "@/components/WorkList";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkList />
        <About />
      </main>
      <Footer />
    </>
  );
}
