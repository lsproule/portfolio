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
    <section id="hero" class=" p-3 h-full mb-5">

      <Container class="flex flex-col h-full items-center justify-center ">
        <div class="bg-black bg-opacity-50  md:bg-opacity-0 md:bg-none flex flex-col items-center justify-center md:bg-none">
          <div class="rounded-l-xl text-center   justify-center p-5 mb-4">
            <Motion.div
              {...Appear}
              class="font-bold bg-green-600 w-auto text-lg md:text-3xl px-3 py-1 rounded text-bg"
            >
              <Motion.span
                class="text-primary"
                {...Appear}
              >
                Hello, I'm <span class="text-xl md:text-3xl font-bold  ">Lucas Sproule</span>
              </Motion.span>
            </Motion.div>
            <div class="text-md mt-4 md:text-xl  ">A
              <Motion.span {...Appear} class="font-bold text-green-500"> Site Reliability </Motion.span>
              Engineer

            </div>

          </div>
          <Motion.p
            {...Appear}
            class="text-center text-gray-300 px-4  md:w-1/2 mb-4 lg:w-2/5 text-balance border-none"
          >

            I have a deep passion for DevOps and SRE practices, with a strong affinity for CI/CD, Monitoring, Kubernetes, and GitOps methodologies.

          </Motion.p>
          <Motion.a href="#projects" {...Appear}
            class="rounded-lg p-2 mb-5 font-semibold text-green-500 tracking-wide px-4 border border-green-700 hover:border-[var(--bg)]  hover:text-[var(--bg)] hover:bg-green-500">
            Check out  my work
          </Motion.a>
        </div>
      </Container>
    </section>
  )
}
