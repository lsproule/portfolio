import { Container } from "./Container"


export const About = () => {
  return (
    <section id="about" class="  p-3 ">
      <Container class="h-auto  p-3 ">
        <div class="text-green-500 text-center mb-4 text-2xl font-bold">About Me</div>
        <div class="grid  items-center justify-items-center md:grid-cols-2  gap-4 ">
          <div class="w-full md:w-full flex justify-center lg:h-[40rem]">
            <img src="/profile.jpeg" class="max-h-full object-contain rounded-lg" />
          </div>
          <div class="w-full text-sm text-center md:text-left">
            I'm a tech enthusiast with a passion for travel and a knack for problem-solving
            through code. Fluent in Spanish, I enjoy connecting with diverse cultures. My tech journey began in a data science bootcamp,
            igniting my love for coding. When I'm not exploring new destinations – by the way, I use Neovim
          </div>
        </div>
      </Container>
    </section>
  )
}
