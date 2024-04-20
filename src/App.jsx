import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import sum from "./sum";
import Header from "./Header/Header";
import Users from "./Users/Users";
import Button from "./ui/Button";
import TomatoButton from "./ui/TomatoButton";
import Heading from "./ui/Heading";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header title="title header" />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <h1>{sum(1, 2, 3).toString()}</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Users />
      <Button>pink button</Button>
      <Button varient="primary">primary button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <Heading>this is h1</Heading>
      <Heading as="h2">this is h2</Heading>
      <Heading as="h3">this is h3</Heading>
      <Heading as="h4">this is h4</Heading>
    </>
  );
}

export default App;
