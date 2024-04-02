import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
