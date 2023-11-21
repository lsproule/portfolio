import { Container } from "./Container";
import { FaSolidSuitcase } from 'solid-icons/fa'
import { Input } from "~/Library";

export const Contact = () => {
  return (
    <section id="contact" class="mb-8 h-full p-3 ">
      <Container class="  ">
        <div class="flex mb-12 justify-center">
          <div class="flex rounded-lg  w-full text-black md:w-1/2 lg:w-1/3 bg-neutral-800 p-12 flex-col mt-12 gap-4 items-center  justify-center text-xl font-bold  ">
            <div class="flex items-center text-white mt-4 justify-center text-2xl font-bold mb-3 ">
              <FaSolidSuitcase class="mr-2 text-3xl text-green-500" /> Contact
            </div>
            <div class="text-sm text-white text-balance text-center text-muted ml-2">
              I'm currently looking for work, if you're interested in hiring me, please reach out!
            </div>
            <Input class="border w-full bg-white border-green-500 rounded-xl p-2 px-3 ml-2" variant={'default'}  placeholder="test" />
            <input class="border w-full bg-white border-green-500 rounded-xl p-2 px-3 ml-2" type="text" placeholder="email" />
            <input class="border w-full bg-white border-green-500 rounded-xl p-2 px-3 ml-2" type="text" placeholder="name" />
            <textarea class="border w-full h-48  align-text-top border-green-500 rounded-xl  pt-2  px-3  ml-2" placeholder="message" />
            <button class="border text-green-500 border-green-500 rounded-xl p-2 px-3 ml-2">Send</button>
          </div>
        </div>
      </Container>
    </section>
  )
}
