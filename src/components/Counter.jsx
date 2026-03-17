import { createSignal } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <>
      <div class="flex justify-center items-center">
        <button class="bg-blue-500 rounded p-4 m-2" onClick={() => setCount(count() + 1)}>+1</button>
        <div class="text-2xl">{count()}</div>
        <button class="bg-blue-500 rounded p-4 m-2" onClick={() => setCount(count() - 1)}>-1</button>
      </div>
    </>
  );
};

export default Counter;
