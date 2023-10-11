import { Container } from "./Container";
import { FaSolidSuitcase } from 'solid-icons/fa'



// should have an input  for name, email, and message

export const Contact = () => {
  return (<section id="contact" class=" h-full p-3 ">
    <Container class="h-full ">
      <div class="flex items-center mt-4 justify-center text-xl font-bold mb-3 text-green-500">
        <FaSolidSuitcase class="mr-2" /> Contact
      </div>

      <div class="flex mb-4 flex-col mt-48 gap-4 items-center  justify-center text-xl font-bold  text-green-500">
        <div class="text-sm text-muted ml-2">I'm currently looking for work, if you're interested in hiring me, please reach out!</div>
        <input type="text" class="border bg-primary text-green-500 border-green-500 rounded-xl p-2 px-3 ml-2" placeholder="email" />
        <input type="text" class="border bg-primary text-green-500 border-green-500 rounded-xl p-2 px-3 ml-2" placeholder="name" />
        <textarea  class="border inline-block align-text-top bg-primary  text-green-500  border-green-500 rounded-xl  pt-2 pb-20 px-2  ml-2" placeholder="message" />
        <button class="border border-green-500 rounded-xl p-2 px-3 ml-2">Send</button>


      </div>
    </Container>
  </section>)
}
