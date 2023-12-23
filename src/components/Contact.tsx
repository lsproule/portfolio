import { Container } from "./Container";
import { FaSolidSuitcase } from 'solid-icons/fa'
import { Input } from "~/Library";
import CalendlyWidget from "./Calendly";
export const Contact = () => {
  return (
    <section id="contact" class="mb-8  p-3 ">
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      <Container class="">
        <div class="flex   justify-center">
          <div class="flex p-4 mb-8 rounded-lg  w-full text-black md:w-1/2 lg:w-1/3 bg-neutral-800  flex-col mt-12 gap-4 items-center  justify-center text-xl font-bold  ">
            <div class="flex items-center text-white mt-4 justify-center text-2xl font-bold mb-3 ">
              <FaSolidSuitcase class="mr-2 text-3xl text-green-500" /> Contact
            </div>
            <div class="text-sm text-white text-balance text-center text-muted ml-2">
              I'm currently looking for work, if you're interested in hiring me, please reach out!
            </div>
            <form action="mailto:lucas.sproule.42@gmail.com" class="flex w-full flex-col gap-4" method="post" enctype="text/plain">
              <input class="border w-full bg-white border-green-500 rounded-xl p-2 px-3 ml-2" type="text" placeholder="email" />
              <input class="border w-full bg-white border-green-500 rounded-xl p-2 px-3 ml-2" type="text" placeholder="name" />
              <textarea class="border w-full h-48  align-text-top border-green-500 rounded-xl  pt-2  px-3  ml-2" placeholder="message" />
              <button class="border bg-green-500 text-neutral-800 border-green-500 rounded-xl p-2 px-3 ml-2">Send</button>
            </form>
          </div>
        </div>
        <div class="text-green-500 flex flex-col items-center">
          <div class="text-white">need to talk sooner</div>
          <CalendlyWidget></CalendlyWidget>
        </div>
      </Container>
    </section>
  )
}
