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

const Job = () => {
  return (
    <div class="flex   w-full border rounded    border-green-500 flex-col justify-center items-start p-3">
      <div class="flex items-center font-extrabold text-xl gap-2">
        <FaRegularBuilding class="text-green-500" /><div>Deloitte</div>

      </div>
      <div class="flex items-center gap-2">
        <FaSolidLaptop class="text-green-500 text-xl" /> <div>SRE</div>

      </div>
      <div class="flex <item> gap-2">
        <FaRegularCalendar class="text-xl text-green-500" />
        <div>Jan 2022-<span class="text-green-500">Present</span></div>
      </div>
      <div>
        <div class="flex items-center gap-2"><FaSolidListCheck class="text-green-500 text-xl" /> Responsibilities:</div>
        <div class=" p-0 md:p-5 text-sm text-center text-balance">
          Contracting through Deloitte for TikTok, I managed Golang service deployments and addressed monitor resets, actively contributing to the resolution of this critical issue. I streamlined Helm chart updates and service releases via our CI/CD platform, optimizing operational efficiency. Furthermore, I designed a user-friendly Kubernetes interface that displayed custom service mesh metrics, facilitating early warning analysis.
        </div>
      </div>
    </div>
  )
}
const [slider,] = createSlider({ mode: "free-snap", });


slider
export const Experience = () => {
  let ref: HTMLElement | undefined;

  onMount(() => {
    slider(ref as HTMLElement);
  });
  return (
    <section id="experience" class=" h-auto p-3 "

    >
      <Container class="overflow-x-clip   p-3">
        <div class="flex items-center  justify-center font-bold mb-3 text-green-500">
          <FaSolidSuitcase class="mr-2" /> Experience

        </div>
        <div ref={ref as HTMLDivElement} class="flex md:hidden  mx-4 gap-2" use:slider>

            <For each={[1, 2, 3]}>
              {() => <Job />}
            </For>
        </div>
        <div class="hidden md:grid gap-2 grid-cols-2">
            <For each={[1, 2, 3]}>
              {() => <Job />}
            </For>
        </div>


      </Container>
    </section>


  );
}
