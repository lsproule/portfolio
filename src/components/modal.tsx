import { createSignal } from "solid-js"

export const Modal = () => {
   const [show, setShow] = createSignal(false)
   return (
      <div class="flex flex-col items-center justify-center h-screen">
          <button onClick={() => setShow(!show())}>Show Modal</button>
       )

}
