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
      <div class="flex justify-center items-center">
        <button
          class="bg-blue-500 rounded p-4 m-2 cursor-pointer"
          // Usamos una función que retorna el nuevo valor sin mutar 'prev'
          onClick={() => setCount((prev) => prev + 1)}
        >
          +1
        </button>

        <div class="text-2xl">{count()}</div>

        <button
          class="bg-blue-500 rounded p-4 m-2 cursor-pointer"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default Counter;
