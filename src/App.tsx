import { useState } from "react";
import "./App.css";

import UseReducer from "./components/useReducer";
import { CounterProvider, initial_State } from "./components/useContext";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <CounterProvider count={initial_State.count} text={initial_State.text}>
        <UseReducer>
          {(num: number) => <>current count is :- {num}</>}
        </UseReducer>
      </CounterProvider>
    </div>
  );
}

export default App;
