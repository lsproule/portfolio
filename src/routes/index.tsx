import {
  Footer,
  Hero,
  About,
  Experience,
  Projects,
  Contact
} from "~/components";




export default function Home() {
  return (
    <main class="  text-white">
      <Hero />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
