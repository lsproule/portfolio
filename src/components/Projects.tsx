import { Container } from "./Container";
import { createSignal, For } from "solid-js"
import { FaSolidSuitcase } from 'solid-icons/fa'
import { createSlider, SliderButton, SliderProvider } from "solid-slider"
import { A } from "solid-start";
import { Portal } from "solid-js/web";

type Project = {
  title: string,
  description: string,
  image: string,
  link?: string
  class?: string
  info: string
}
const [fullscreenProject, setFullscreenProject] = createSignal<string | null>(null);

const toggleFullscreen = (projectTitle: string) => {
    setFullscreenProject(fullscreenProject() === projectTitle ? null : projectTitle);
};

const isProjectFullscreen = (projectTitle: string) => fullscreenProject() === projectTitle;

const projects = [
  {
    title: "Frate - Cargo for c++",
    description: "I am working on an open source package manager for c++, that will allow you to easily install and manage c++ libraries.",
    image: "/frate.png",
    info: "/frate"
  },
  {
    title: "Embedding Neovim into the browser",
    description: "I wanted to practice with file descriptors and websockets, so I built this project to pass stdio through a socket. I built it with javascript and python. I isolated my neovim with docker to build the user interface",
    image: "/nvim.png",
    info: "/nvim"
  },
  {
    title: "Open Source Contributor to astronvim",
    description: "I am a contributor to the astronvim project, which is a neovim distribution that is built with lua. I have contributed to the project by adding a new plugin, and fixing bugs.",
    image: "/astro.png",
    info: "/astro"
  },
]
const Project = ({ title, description, image, info, ...props }: Project) => {
  return (
    <div  class={`slide flex flex-col justify-around  p-2 pt-5 shadow-md shadow-neutral-900 z-0  bg-neutral-800  text-center rounded-xl  ${props.class}`}>

      {isProjectFullscreen(title) && 
        <Portal target={document.querySelector("body")}>
          <div class="fixed inset-4 lg:inset-6 z-50" onClick={()=>toggleFullscreen(title)}>
            <img src={image} class="w-full h-full object-cover" />
          </div>
        </Portal>
      }
      <img onClick={()=>toggleFullscreen(title)} src={image} class={ "w-full"} />
      <div class="text-2xl my-4 mb-2 font-bold">{title}</div>
      <div class=" text-muted">{description}</div>
      <div class="my-4 ">
        <A class="text-green-500 hover:text-green-700" href={info}>
          See more
        </A>
      </div>
    </div>
  )
}
const [slider] = createSlider({ mode: "free-snap", initial: -1 });

export const Projects = () => {

  slider;
  return (
    <section id="projects" class="lg:w-5/6 py-8 mx-auto bg-neutral-900   ">
      <Container class="h-full ">
        <div class="flex items-center mt-4 ml-6 text-xl font-bold mb-3 text-white">
          <FaSolidSuitcase class="mr-2  text-green-500" /> Personal Projects
        </div>
        <div class="hidden  gap-8 p-3 w-full lg:grid grid-cols-2 " use:slider>
          <For each={projects}>
            {(project) => <Project {...project} class={``} />}
          </For>
        </div>
        <div class="p-4 px-5 md:p-20  overflow-clip">

          <div class="flex gap-3 z-10 w-auto lg:hidden" use:slider>
            <For each={projects}>
              {(project) => <Project {...project} class={`z-0`} />}
            </For>
          </div>


        </div>
      </Container>
    </section>)
}
