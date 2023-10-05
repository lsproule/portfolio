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
    title: "Embedding Neovim into the browser",
    description: "I wanted to practice with file descriptors and websockts, so I built this project to pass stdio through a socket. I built it with javascript and python. I isolated my neovim with docker to build the user interface",
    image: "/nvim.png"
    
  },
  {
    title: "Embedding Neovim into the browser",
    description: "I wanted to practice with file descriptors and websockts, so I built this project to pass stdio through a socket. I built it with javascript and python. I isolated my neovim with docker to build the user interface",
    image: "/nvim.png"
    
  },
]
const Project = ({title, description, image, ...props }:Project) => {
  return (
    <div class={`slide p-3 px-5   text-center rounded-xl border border-green-500  ${props.class}`}>
      <div class="text-xl mb-2 font-bold">{title}</div>
      <img src={image} class="text-xl  font-bold"/>
      <div class=" text-sm text-muted">{description}</div>
    </div>
  )
}
  const [
    slider,
    {
      current,
      next,
      prev,
      moveTo
    }
  ] = createSlider({mode:"free-snap", initial:-1 });

export const Projects = () => {

  slider;
  return (<section id="projects" class="  p-3 ">
    <Container class="h-full ">
      <div class="flex items-center mt-4 justify-center text-xl font-bold mb-3 text-green-500">
        <FaSolidSuitcase class="mr-2" /> Personal Projects
      </div>
        <div class="hidden gap-3 p-3 w-full lg:grid grid-cols-2 " use:slider>
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
