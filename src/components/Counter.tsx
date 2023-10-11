import { createSignal, JSXElement } from "solid-js";

type CounterProps = {
  start: number;
};

export default function Counter({ start }:CounterProps): JSXElement {
  const [count, setCount] = createSignal(start);
  return (
    <button
      class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
}
