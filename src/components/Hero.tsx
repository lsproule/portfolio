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
            class="font-bold bg-green-500 w-auto text-lg md:text-2xl px-3 rounded text-bg"
          >
            <Motion.span
              {...Appear}
            >
              Hello, I'm Lucas Sproule
            </Motion.span>
          </Motion.div>
          <div class="text-md md:text-2xl font-bold ">A
            <Motion.span {...Appear} class="text-green-500"> Site Reliability </Motion.span>
            Engineer

          </div>

        </div>
        <Motion.p
          {...Appear}
          class="text-center md:mx-24 lg:mx-48 text-balance border-none mb-3"
        >

          I'm a devoted DevOps/SRE engineer with a love for containerization, coupled with a profound fascination for a multitude of programming languages. My insatiable curiosity is my driving force, continually propelling me towards mastering new technologies and optimizing system performance.

        </Motion.p>
        <Motion.button {...Appear}
          class="rounded-lg p-2 font-bold tracking-widest  border border-white hover:border-[var(--bg)]  hover:text-[var(--bg)] hover:bg-green-500">
          Check out  my work
        </Motion.button>
      </Container>
    </section>
  )
}
