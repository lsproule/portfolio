import { A, useLocation } from "solid-start";
import { Motion } from "@motionone/solid";
import { FaSolidBars } from "solid-icons/fa";
import { createSignal, Show } from "solid-js";

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

type ModalProps = {
  setShow: (show: boolean) => void
}

const Modal = ({ setShow }: ModalProps) => {
  return (
    <div class="fixed top-0 left-0 h-full w-full  bg-black bg-opacity-50 z-50">
      <div class="bg-green-600 text-bg w-1/2 h-full">
        <div class="flex items-center justify-between p-3">
          <A href="#hero" class="text-2xl pasifico font-bold">Lucas Sproule</A>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
        <ul class="flex flex-col items-center gap-5">
          <li onClick={()=>{setShow(false)}}><A class="font-bold" href="#experience">Experience</A></li>
          <li onClick={()=>{setShow(false)}}><A class="font-bold" href="#about">About</A></li>
          <li onClick={()=>{setShow(false)}}><A class="font-bold" href="#projects">Projects</A></li>
          <li onClick={()=>{setShow(false)}}><A class="font-bold" href="#contact">Contact Me</A></li>
        </ul>
      </div>
    </div>
  )
}

export const Navbar = () => {
  const [modal, setModal] = createSignal(false);
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname + location.hash
      ? "text-green-500"
      : " border-none transtion-all duration-500 hover:border-red-500";
  return <div><Motion.nav {...MotionProps} class="border-b bg-primary py-4  px-4 border-white flex">
    <A class="flex items-center " href="#hero">
      <div class="text-green-500 pasifico  text-2xl font-bold">
        Lucas Sproule
      </div>
    </A>
    <div class="ml-auto flex items-center">
      <button onClick={() => { setModal((prev) => !prev) }}><FaSolidBars class="text-2xl text-green-500 md:hidden" /></button>
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
    <Show when={modal()}>
      <Modal setShow={setModal} />
    </Show>
  </div>
}
