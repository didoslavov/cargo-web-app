import Header from "./components/Header/Header";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Cta from "./components/Cta/Cta";
import Solutions from "./components/Solutions/Solutions";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <About />
      <Cta />
      <Solutions />
    </main>
  );
}
