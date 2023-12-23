import {
  Footer,
  Hero,
  About,
  Experience,
  Projects,
  Background,
  Contact
} from "~/components";




export default function Home() {
  return (
    <main class="  text-white">
      <Background />
      <Hero />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
