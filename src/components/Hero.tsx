import { Motion } from "@motionone/solid"
import { Container } from "./Container"

export const Hero = () => {
  const Appear = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.5,
    }
  }
  return (
    <section id="hero" class=" p-3  h-full mb-5">

      <Container class="flex flex-col h-full items-center justify-center ">
        <div class="rounded-l-xl text-center  justify-center p-3">
          <Motion.div
            {...Appear}
            class="font-bold bg-green-600 w-auto text-lg md:text-3xl px-3 py-1 rounded text-bg"
          >
            <Motion.span
              class="text-primary"
              {...Appear}
            >
              Hello, I'm <span class=" pasifico drop-shadow  text-2xl  ">Lucas Sproule</span>
            </Motion.span>
          </Motion.div>
          <div class="text-md md:text-xl  ">A
            <Motion.span {...Appear} class="font-bold text-green-500"> Site Reliability </Motion.span>
            Engineer

          </div>

        </div>
        <Motion.p
          {...Appear}
          class="text-center text-gray-300 md:mx-24 lg:mx-48 text-balance border-none mb-3"
        >

          I have a deep passion for DevOps and SRE practices, with a strong affinity for CI/CD, Monitoring, Kubernetes, and GitOps methodologies.

        </Motion.p>
        <Motion.a href="#projects" {...Appear}
          class="rounded-lg p-2 font-semibold text-green-500 tracking-wide  border border-green-700 hover:border-[var(--bg)]  hover:text-[var(--bg)] hover:bg-green-500">
          Check out  my work
        </Motion.a>
      </Container>
    </section>
  )
}
