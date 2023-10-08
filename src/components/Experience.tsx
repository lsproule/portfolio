import {
  FaSolidSuitcase,
  FaRegularBuilding,
  FaSolidLaptop,
  FaRegularCalendar,
  FaSolidListCheck
} from 'solid-icons/fa'
import { Container } from './Container'
import { createSlider, Slider } from "solid-slider"
import { onMount, For } from 'solid-js'

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
    title: "SRE",
    start: "Jan 2022",
    end: "Present",
    responsibilities: "Contracting through Deloitte for TikTok, I managed Golang service deployments and addressed monitor resets, actively contributing to the resolution of this critical issue. I streamlined Helm chart updates and service releases via our CI/CD platform, optimizing operational efficiency. Furthermore, I designed a user-friendly Kubernetes interface that displayed custom service mesh metrics, facilitating early warning analysis."

  },
  {
    company: "Blue Apron",
    title: "SRE",
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
    title: "Junior  DevOps Engineer",
    start: "Mar 2020",
    end: "Jan 2021",
    responsibilities: `I was responsible for the maintenance of the company’s infrastructure, including
      monitoring, alerting, and logging. I also worked on the development of a CI/CD pipeline. To help migrate us off on prem servers
      to the cloud, I worked on  our terraform scripts to help us migrate to the cloud.`
  }

]

const CurrentJob = ({ company, title, start, responsibilities }: JobProps) => {
  return (
    <div class="flex   w-full  rounded text-bg bg-green-700 flex-col justify-center items-start p-3">
      <div class="flex items-center font-extrabold  text-2xl gap-2">
        <FaRegularBuilding class="text-xl" /><div>{company}</div>

      </div>
      <div class="flex items-center gap-2 ">
        <FaSolidLaptop class="text-xl" /> <div>{title}</div>

      </div>
      <div class="flex   gap-2">
        <FaRegularCalendar class="text-xl" />
        <div>{start}- <span class="">Present</span></div>
      </div>
      <div>
        <div class="flex  items-center gap-2"><FaSolidListCheck class="text-xl" /> Responsibilities:</div>
        <div class=" pl-0  text-bg text-sm ">
          {responsibilities}
        </div>
      </div>
    </div>
  )
}

const Job = ({ company, title, start, end, responsibilities }: JobProps) => {
  return (
    <div class="flex   w-1/2 border rounded    border-green-500 flex-col justify-center items-start p-3">
      <div class="flex items-center font-extrabold text-xl gap-2">
        <FaRegularBuilding class="text-green-500" /><div>{company}</div>

      </div>
      <div class="flex items-center gap-2">
        <FaSolidLaptop class="text-green-500 text-xl" /> <div>{title}</div>

      </div>
      <div class="flex <item> gap-2">
        <FaRegularCalendar class="text-xl text-green-500" />
        <div>{start}-{end}</div>
      </div>
      <div>
        <div class="flex mb-2 items-center gap-2"><FaSolidListCheck class="text-green-500 text-xl" /> Responsibilities:</div>
        <div class=" p-0 md:p-5 text-sm  ">
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
    <section id="experience" class=" h-auto p-3 "

    >
      <Container class="overflow-x-clip   p-3">
        <div class="flex items-center  justify-center font-bold mb-3 text-green-500">
          <FaSolidSuitcase class="mr-2" /> Experience

        </div>
        <div class="flex md:hidden  mx-4 gap-2" use:slider>

          <For each={Jobs}>
            {(job) => <Job {...job} />}
          </For>
        </div>
        <div class="hidden md:grid gap-2 w-auto grid-cols-2">
          <For each={Jobs}>
            {(job) => <Job  {...job} />}
          </For>
        </div>


      </Container>
    </section>


  );
}
