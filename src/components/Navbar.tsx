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
    zIndex: 0,
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
    <div id="modal" class="fixed top-0 modal  left-0  h-screen w-full  bg-black bg-opacity-50   z-[999]">
      <div id="modal" class="bg-green-600 modal fixed z-[999] text-bg w-2/3 h-screen">
        <div class="flex items-center justify-between p-3">
          <A href="#hero" class="text-xl pasifico font-bold">Lucas Sproule</A>
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
  return <div><Motion.nav {...MotionProps} class=" bg-neutral-950 shadow shadow-gray-900 opacity-10  py-4  px-4 flex">
    <A class="flex items-center " href="#hero">
      <div class="text-green-500 pasifico mb-2 ml-8  text-2xl font-bold">
        Lucas Sproule
      </div>
    </A>
    <span class="ml-auto flex items-center">
      <button onClick={() => { setModal((prev) => !prev) }}><FaSolidBars class="text-2xl text-green-500 md:hidden" /></button>
    </span>
    <ul class="ml-auto hidden md:flex items-center  gap-x-8 pr-8 text-lg  text-gray-200">
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
