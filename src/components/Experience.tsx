import {
  FaSolidSuitcase,
  FaRegularBuilding,
  FaSolidLaptop,
  FaRegularCalendar,
  FaSolidListCheck
} from 'solid-icons/fa'
import { Container } from './Container'
import { createSlider, Slider } from "solid-slider"
import {  For } from 'solid-js'

type JobProps = {
  company: string,
  title: string,
  start: string,
  end: string,
  responsibilities: string
}

const Jobs: JobProps[] = [
  {
    company: "Deloitte",
    title: "Site Reliablity Engineer",
    start: "Jan 2022",
    end: "Present",
    responsibilities: "Contracting through Deloitte for TikTok, I managed Golang service deployments and addressed monitor resets, actively contributing to the resolution of this critical issue. I streamlined Helm chart updates and service releases via our CI/CD platform, optimizing operational efficiency. Furthermore, I designed a user-friendly Kubernetes interface that displayed custom service mesh metrics, facilitating early warning analysis."

  },
  {
    company: "Blue Apron",
    title: "Site Reliablity Engineer",
    start: "Jan 2021",
    end: "Jan 2022",
    responsibilities: `Helped with setup of a direct VPN and DNS setup for hybrid cloud environment. We had
juniper devices, so we regurarly had to connect to the juniper devices to expose ports and
configure diffent things in the network. This resulted in massive savings because in our data
centers we could setup a dev and staging kubernetes cluster, and we began to only run prod
in the cloud which led to massive savings. `

  },
  {
    company: "Active International",
    title: "Jr.  DevOps Engineer",
    start: "Mar 2020",
    end: "Jan 2021",
    responsibilities: `I was responsible for the maintenance of the company’s infrastructure, including
      monitoring, alerting, and logging. I also worked on the development of a CI/CD pipeline. To help migrate us off on prem servers
      to the cloud, I worked on  our terraform scripts to help us migrate to the cloud.`
  }

]



const Job = ({ company, title, start, end, responsibilities }: JobProps) => {
  
  return (
    <div class="md:grid md:grid-cols-9 flex  rounded  bg-neutral-950 shadow-lg shadow-gray-950   flex-col justify-center items-start p-3">
      <div class="md:col-span-3 md:mb-12 h-full md:pl-8  flex flex-col justify-center gap-2">
        <div class="flex text-white text-xl mt-10  items-center gap-2">
          <FaSolidLaptop class="text-green-500" /> <div>{title}</div>

        </div> <div class="flex items-center font-extrabold text-lg gap-2">
          <FaRegularBuilding class="text-green-500" />
          <div class="text-neutral-500">{company}</div>
        </div>

        <div class="flex <item> gap-2">
          <FaRegularCalendar class=" text-green-500" />
          <div class="text-sm text-neutral-500">{start}-{end}</div>
        </div>
      </div>
      <div class="md:col-span-5 mb-12">
        <div class="flex mt-8 mb-4 items-center gap-2"><FaSolidListCheck class="text-green-500 text-xl" /> Responsibilities:</div>
        <div class=" p-0 text-sm text-neutral-300 ">
          {responsibilities}
        </div>
      </div>
    </div>
  )
}


export const Experience = () => {
  const [slider,] = createSlider({ mode: "free-snap", });

  slider
  return (
    <section id="experience" class="bg-neutral-900 mb-20 mx-auto lg:w-4/5 h-auto p-3 "

    >
      <Container class="overflow-x-clip  mb-20   p-3">
        <div class="flex items-center pl-14 my-10 md:pb-10  text-2xl font-bold ">
          <FaSolidSuitcase class="mr-4 text-green-500" /> Experience

        </div>
        <div class="flex md:hidden  mx-4 gap-2" use:slider>

          <For each={Jobs}>
            {(job) => <Job {...job} />}
          </For>
        </div>
        <div class="hidden md:flex mt-8  lg:px-12 flex-col gap-12 w-auto grid-cols-2">
          <For each={Jobs}>
            {(job) => <Job  {...job} />}
          </For>
        </div>
      </Container>
    </section>


  );
}
