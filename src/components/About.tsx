import { Container } from "./Container"
import { TbUser } from 'solid-icons/tb'


export const About = () => {
  return (
    <section id="about" class="lg:px-20  p-3  mb-10">
      <Container class="h-auto  p-3 ">
        <div class="text-white  mx-4 flex gap-4 text-2xl font-bold"><TbUser class="text-3xl text-green-500"/>About Me</div>
        <div class="grid mx-auto  items-center justify-items-center md:grid-cols-4  gap-4 ">
          <div class="w-full md:col-span-1 lg:h-[40rem]">
            <img src="/profile.jpeg" class="max-h-full mt-24 object-contain rounded-lg" />
          </div>
          <div class="w-full md:col-span-3 ml-8  md:text-left">

            I'm a devoted DevOps/SRE engineer with a love for containerization, coupled with a profound fascination for a multitude of programming languages. My insatiable curiosity is my driving force, continually propelling me towards mastering new technologies and optimizing system performance.
            I'm a tech enthusiast with a passion for travel and a knack for problem-solving
            through code. Fluent in Spanish, I enjoy connecting with diverse cultures. My tech journey began in a data science bootcamp,
            igniting my love for coding. When I'm not exploring new destinations – by the way, I use Neovim
          </div>
        </div>
      </Container>
    </section>
  )
}
