import { Motion, Presence } from "@motionone/solid";

export const Container = ({ children, ...props }: any) => {
  return (
    <section
      class={`border  shadow-3-xl shadow-white rounded-xl ${props.class}`}
    >
      {children}
    </section>
  )
}
