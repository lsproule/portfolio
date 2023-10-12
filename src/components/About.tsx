import { Container } from "./Container"


export const About = () => {
  return (
    <section id="about" class="  p-3  my-24">
      <Container class="h-auto  p-3 ">
        <div class="text-green-500  mb-4 ml-12 text-2xl font-bold">About Me</div>
        <div class="grid mx-auto  items-center justify-items-center md:grid-cols-4  gap-4 ">
          <div class="w-full h-96 md:w-full col-span-1 lg:h-[40rem]">
            <img src="/profile.jpeg" class="max-h-full mt-24 object-contain rounded-lg" />
          </div>
          <div class="w-full col-span-3   md:text-left">

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
