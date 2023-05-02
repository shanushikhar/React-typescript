import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import DomRef from "./components/DomRef";
import LiftingState from "./components/LiftingState";
import MutableRef from "./components/MutableRef";
import RenderingList from "./components/RenderingList";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      {/* <LiftingState setCount={setCount}>{count}</LiftingState> */}
      <RenderingList
        items={[1, 2, "Start"]}
        render={(item: number | string) => <span className="red">{item}</span>}
      />
    </div>
  );
}

export default App;
