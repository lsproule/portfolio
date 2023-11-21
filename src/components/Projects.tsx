import { Container } from "./Container";
import { For } from "solid-js"
import { FaSolidSuitcase } from 'solid-icons/fa'
import { createSlider, SliderButton, SliderProvider } from "solid-slider"

type Project = {
  title: string,
  description: string,
  image: string,
  link?: string
  class?: string
}

const projects = [
  {
    title: "Frate - Cargo for c++",
    description: "I am working on an open source package manager for c++, that will allow you to easily install and manage c++ libraries.",
    image: "/frate.png"

  },
  {
    title: "Embedding Neovim into the browser",
    description: "I wanted to practice with file descriptors and websockets, so I built this project to pass stdio through a socket. I built it with javascript and python. I isolated my neovim with docker to build the user interface",
    image: "/nvim.png"
  },
  {
    title: "Open Source Contributor to astronvim",
    description: "I am a contributor to the astronvim project, which is a neovim distribution that is built with lua. I have contributed to the project by adding a new plugin, and fixing bugs.",
    image: "/astro.png"
  },
]
const Project = ({ title, description, image, ...props }: Project) => {
  return (
    <div  class={`slide p-5 shadow-md shadow-neutral-900 px-5 bg-neutral-800  text-center rounded-xl  ${props.class}`}>
      <img src={image} class="text-xl w-full  font-bold" />
      <div class="text-2xl my-8 mb-2 font-bold">{title}</div>
      <div class="  text-muted">{description}</div>
    </div>
  )
}
const [slider] = createSlider({ mode: "free-snap", initial: -1 });

export const Projects = () => {

  slider;
  return (
    <section id="projects" class="lg:w-5/6 mx-auto bg-neutral-900   ">
      <Container class="h-full ">
        <div class="flex items-center mt-4 ml-6 text-xl font-bold mb-3 text-white">
          <FaSolidSuitcase class="mr-2  text-green-500" /> Personal Projects
        </div>
        <div class="hidden mt-20 gap-8 p-3 w-full lg:grid grid-cols-2 " use:slider>
          <For each={projects}>
            {(project) => <Project {...project} class={``} />}
          </For>
        </div>
        <div class="p-4 px-5 md:p-20  overflow-clip">

          <div class="flex gap-3 w-auto lg:hidden" use:slider>
            <For each={projects}>
              {(project) => <Project {...project} class={`w-20`} />}
            </For>
          </div>


        </div>
      </Container>
    </section>)
}
