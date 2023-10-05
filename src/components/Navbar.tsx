import { A, useLocation } from "solid-start";
import { Motion } from "@motionone/solid";
import {FaSolidBars} from "solid-icons/fa";

const MotionProps = {
  initial: {
    opacity: 0,
    x: 100,
    },
  animate: {
    opacity: 1,
    x: 0,
    },
  transition: {
    duration: 0.5,
    }
}
export const Navbar = () => {
  const location = useLocation();
  const active = (path: string) =>
    path  == location.pathname + location.hash
      ? "text-green-500"
      : " border-none transtion-all duration-500 hover:border-red-500";
  return <Motion.nav {...MotionProps} class="border-b bg-primary  px-4 border-white flex">
    <A class="flex items-center " href="#hero">
    <div class="text-green-500 pasifico  text-2xl font-bold">
      Lucas Sproule
    </div>
    </A>
    <div class="ml-auto flex items-center">
      <FaSolidBars class="text-2xl text-green-500 md:hidden" />
    </div>
    <ul class="ml-auto hidden md:flex items-center  gap-x-4  text-lg  text-gray-200">
      <li class={` ${active("/#experience")} `}>
        <A class="font-bold" href="#experience">Experience</A>
      </li>
      <li class={` ${active("/#about")}`}>
        <A class="font-bold" href="#about">About</A>
      </li>
      <li class={` ${active("/#projects")}`}>
        <A class="font-bold" href="#projects">Projects</A>
      </li>
      <li class={` ${active("/#contact")}`}>
        <A class="font-bold" href="#contact">Contact Me</A>
      </li>
    </ul>
  </Motion.nav>
}
