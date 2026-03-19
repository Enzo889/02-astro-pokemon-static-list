import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
  initialValue?: number;
  children?: JSX.Element;
}

const Counter: Component<Props> = (props) => {
  // Aseguramos un valor inicial por defecto para evitar 'undefined'
  const [count, setCount] = createSignal(props.initialValue ?? 0);

  return (
    <>
      {props.children}
      <div class="flex justify-center items-center gap-1.5">
        <button
          class="retro-btn m-2"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +1
        </button>

        <div class="text-2xl">{count()}</div>

        <button
          class="retro-btn m-2"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default Counter;
